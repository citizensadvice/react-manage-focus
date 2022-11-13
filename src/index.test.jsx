import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from '../test/app';

describe('when a handled button is removed', () => {
  it('focuses the next available element', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'New todo' }));
    expect(screen.getByRole('textbox', { name: 'Item 1' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'New todo' }));
    expect(screen.getByRole('textbox', { name: 'Item 2' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'New todo' }));
    expect(screen.getByRole('textbox', { name: 'Item 3' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'Delete with manage focus 2' }));
    expect(screen.getByRole('button', { name: 'Delete with manage focus 1' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'Delete with manage focus 1' }));
    expect(screen.getByRole('button', { name: 'Delete with manage focus 3' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'Delete with manage focus 3' }));
    expect(screen.getByRole('button', { name: 'New todo' })).toHaveFocus();
  });
});

describe('when the order of handled buttons has changed', () => {
  it('focuses the next available element', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'New todo' }));
    expect(screen.getByRole('textbox', { name: 'Item 1' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'New todo' }));
    expect(screen.getByRole('textbox', { name: 'Item 2' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'New todo' }));
    expect(screen.getByRole('textbox', { name: 'Item 3' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'Reverse' }));

    await userEvent.click(screen.getByRole('button', { name: 'Delete with manage focus 2' }));
    expect(screen.getByRole('button', { name: 'Delete with manage focus 3' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'Delete with manage focus 3' }));
    expect(screen.getByRole('button', { name: 'Delete with manage focus 1' })).toHaveFocus();

    await userEvent.click(screen.getByRole('button', { name: 'Delete with manage focus 1' }));
    expect(screen.getByRole('button', { name: 'New todo' })).toHaveFocus();
  });
});

describe('when a non-handled button is removed', () => {
  it('does not change the focus', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'New todo' }));
    await userEvent.click(screen.getByRole('button', { name: 'Delete without manage focus 1' }));
    expect(document.body).toHaveFocus();
  });
});
