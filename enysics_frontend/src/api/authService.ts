const BASE_URL = 'http://127.0.0.1:8000/auth/';

export const register = async (username: string, email: string, password: string) => {
  const response = await fetch(`${BASE_URL}register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.detail || 'Failed to register');
  }

  return await response.json(); // Returnează detaliile utilizatorului și token-ul
};

export const login = async (username: string, password: string) => {
  const response = await fetch(`${BASE_URL}login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.error || 'Invalid credentials');
  }

  return await response.json(); // Returnează detaliile utilizatorului și token-ul
};
