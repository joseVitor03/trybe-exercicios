import { render, screen } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWith';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('testes do react-router', () => {

  it('componete inicial Home', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const home = screen.getByText(/Você está na página Início/i);
    expect(home).toBeInTheDocument();
  })
  it('teste navegando para a pasta About', async () => {
    const { user } = renderWithRouter(<App />);
    const AboutButton = screen.getByRole('link', {name: /sobre/i});
    await user.click(AboutButton);

    const textAbouth1 = screen.getByRole('heading', {
      level: 1
    })

    expect(textAbouth1).toBeInTheDocument();
  })
});
