'use client';

import { useEffect } from 'react';

function RegisterUserOnDashboard() {
  useEffect(() => {
    const controller = new AbortController();

    const registerUser = async () => {
      try {
        const response = await fetch('/api/users/register', {
          method: 'POST',
          signal: controller.signal,
        });

        if (!response.ok) {
          console.error('Failed to register authenticated user.');
        }
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Failed to register authenticated user.', error);
        }
      }
    };

    void registerUser();

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}

export default RegisterUserOnDashboard;
