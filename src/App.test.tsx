import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('Main page', () => {
  it('Main page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const MAIN_PAGE = screen.getByTestId('mainpage');
    expect(MAIN_PAGE).toBeInTheDocument();
  });
});
