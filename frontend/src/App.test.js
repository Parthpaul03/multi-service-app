import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock global fetch used by App
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve({ message: 'Hello from backend API!' }) })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders main title and fetches API data', async () => {
  render(<App />);
  expect(screen.getByText(/Multi-Service App/i)).toBeInTheDocument();

  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  expect(await screen.findByText(/Hello from backend API!/i)).toBeInTheDocument();
});
