const BASE_URL = 'http://127.0.0.1:8000/';

export const solveMechanics = async (mass: number, force: number) => {
  const response = await fetch(`${BASE_URL}mechanics/solve/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mass, force }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.error || 'Failed to solve mechanics problem.');
  }

  return await response.json();
};
