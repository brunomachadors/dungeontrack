import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getSql } from '@/app/lib/db';

type UserRow = {
  id: number;
  clerk_id: string;
  first_name: string | null;
  last_name: string | null;
  created_at: string;
  updated_at: string;
};

export async function GET() {
  const sql = getSql();

  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const users = await sql<UserRow>`
      SELECT id, clerk_id, first_name, last_name, created_at, updated_at
      FROM users
      WHERE clerk_id = ${user.id}
      LIMIT 1
    `;

    return NextResponse.json(
      {
        exists: users.length > 0,
        user: users[0] ?? null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch user:', error);

    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

export async function POST() {
  const sql = getSql();

  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const firstName = user.firstName ?? null;
    const lastName = user.lastName ?? null;

    const insertedUsers = await sql<UserRow>`
      INSERT INTO users (clerk_id, first_name, last_name)
      VALUES (${user.id}, ${firstName}, ${lastName})
      ON CONFLICT (clerk_id) DO NOTHING
      RETURNING id, clerk_id, first_name, last_name, created_at, updated_at
    `;

    if (insertedUsers.length > 0) {
      return NextResponse.json(
        {
          message: 'User created successfully',
          user: insertedUsers[0],
        },
        { status: 201 }
      );
    }

    const existingUsers = await sql<UserRow>`
      SELECT id, clerk_id, first_name, last_name, created_at, updated_at
      FROM users
      WHERE clerk_id = ${user.id}
      LIMIT 1
    `;

    return NextResponse.json(
      {
        message: 'User already exists',
        user: existingUsers[0] ?? null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to create user:', error);

    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
