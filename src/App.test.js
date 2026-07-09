import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders the premium manufacturing value proposition', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  expect(screen.getByText(/precision-driven manufacturing for modern industry/i)).toBeInTheDocument();
});

test('shows inline validation feedback for incomplete inquiry forms', async () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );

  await userEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

  expect(await screen.findByText(/please complete the required fields/i)).toBeInTheDocument();
});

test('supports searching for machines in the premium catalog', async () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );

  const searchBox = screen.getByPlaceholderText(/search machines/i);
  await userEvent.type(searchBox, 'press');

  expect(await screen.findByText(/pneumatic press/i)).toBeInTheDocument();
});

test('renders the premium corporate navbar links and consultation CTA', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );

  expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
  expect(screen.getAllByText('About').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Quality').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Machines').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Customers').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Gallery').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  expect(screen.getByRole('button', { name: /request consultation/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /toggle navigation/i })).toBeInTheDocument();
});
