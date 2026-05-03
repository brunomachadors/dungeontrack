# Users Data Contract

## Table Definition

```sql
CREATE TABLE users (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  clerk_id VARCHAR(255) UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

## Purpose

The `users` table stores the local application record for each authenticated Clerk user.

In application code, `clerk_id` must be the main user reference. The internal `id` exists only as a technical primary key for database usage.

## Field Contract

| Field | Type | Required | Description | Notes |
| --- | --- | --- | --- | --- |
| `id` | `INTEGER` | Yes | Internal database identifier | Auto-generated identity primary key. Do not expose as the main API reference when `clerk_id` is available. |
| `clerk_id` | `VARCHAR(255)` | Yes | Clerk user identifier | Must be unique. This is the canonical identifier used by the application and API layer. |
| `first_name` | `TEXT` | No | User first name | Optional because Clerk data may be incomplete or intentionally absent. |
| `last_name` | `TEXT` | No | User last name | Optional because Clerk data may be incomplete or intentionally absent. |
| `created_at` | `TIMESTAMPTZ` | No | Record creation timestamp | Defaults to `CURRENT_TIMESTAMP`. |
| `updated_at` | `TIMESTAMPTZ` | No | Record last update timestamp | Defaults to `CURRENT_TIMESTAMP`; should be updated manually by the application on every write. |

## Rules For API Usage

- Use `clerk_id` in Next.js route handlers, services, and joins with authenticated user context.
- Do not depend on `id` in frontend payloads when `clerk_id` already identifies the user.
- On first authenticated access, create the user row if it does not exist yet.
- On profile updates or login sync flows, update `first_name`, `last_name`, and `updated_at`.

## Expected Write Behavior

### Insert

Create a row when a Clerk-authenticated user reaches the application for the first time.

Example:

```sql
INSERT INTO users (
  clerk_id,
  first_name,
  last_name
)
VALUES (
  'user_2abcXYZ123',
  'Bruno',
  'Machado'
);
```

### Update

When the application refreshes user profile data, always update `updated_at`.

Example:

```sql
UPDATE users
SET
  first_name = 'Bruno',
  last_name = 'Machado',
  updated_at = CURRENT_TIMESTAMP
WHERE clerk_id = 'user_2abcXYZ123';
```

### Read

Primary lookup should be by `clerk_id`.

Example:

```sql
SELECT
  id,
  clerk_id,
  first_name,
  last_name,
  created_at,
  updated_at
FROM users
WHERE clerk_id = 'user_2abcXYZ123';
```

## TypeScript Shape

```ts
export type UserRecord = {
  id: number;
  clerk_id: string;
  first_name: string | null;
  last_name: string | null;
  created_at: string;
  updated_at: string;
};
```

## Notes

- `TIMESTAMPTZ` is the right choice here because it keeps timestamps safe across environments and future multi-time-zone usage.
- If the project grows, a future improvement would be adding an index explicitly on `clerk_id`, although the `UNIQUE` constraint already creates one.
- If you want stronger consistency later, we can add a database trigger to keep `updated_at` in sync automatically, but for now manual updates are enough.
