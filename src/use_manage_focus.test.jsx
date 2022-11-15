import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FocusManager, useManageFocus } from '.';

function Child({ delete1, delete2, delete3 }) {
  const ref1 = useManageFocus();
  const ref2 = useManageFocus();
  const ref3 = useManageFocus();

  return (
    <>
      {!delete1 && (
        <button type="button" ref={ref1}>
          button 1
        </button>
      )}
      {!delete2 && (
        <button type="button" ref={ref2}>
          button 2
        </button>
      )}
      {!delete3 && (
        <button type="button" ref={ref3}>
          button 3
        </button>
      )}
    </>
  );
}

function Test({ delete1 = false, delete2 = false, delete3 = false }) {
  return (
    <FocusManager>
      <Child delete1={delete1} delete2={delete2} delete3={delete3} />
    </FocusManager>
  );
}

function TestNoContext({ delete1 = false }) {
  return (
    <Child delete1={delete1} />
  );
}

describe('useManageFocus', () => {
  it('focuses the next item', () => {
    const { rerender } = render(<Test />);
    expect(document.body).toHaveFocus();
    screen.getByRole('button', { name: 'button 1' }).focus();
    rerender(<Test delete1 />);
    expect(screen.getByRole('button', { name: 'button 2' })).toHaveFocus();
  });

  it('focuses the previous item', () => {
    const { rerender } = render(<Test />);
    expect(document.body).toHaveFocus();
    screen.getByRole('button', { name: 'button 2' }).focus();
    rerender(<Test delete2 />);
    expect(screen.getByRole('button', { name: 'button 1' })).toHaveFocus();
  });

  it('focuses the next item if there is no previous item', () => {
    const { rerender } = render(<Test />);
    expect(document.body).toHaveFocus();
    screen.getByRole('button', { name: 'button 2' }).focus();
    rerender(<Test delete2 delete1 />);
    expect(screen.getByRole('button', { name: 'button 3' })).toHaveFocus();
  });

  it('does nothing with no item to focus', () => {
    const { rerender } = render(<Test />);
    expect(document.body).toHaveFocus();
    screen.getByRole('button', { name: 'button 1' }).focus();
    rerender(<Test delete1 delete2 delete3 />);
    expect(document.body).toHaveFocus();
  });

  it('focuses the previous item regardless of insertion order', () => {
    const { rerender } = render(<Test delete1 delete3 />);
    expect(document.body).toHaveFocus();
    rerender(<Test delete1 />);
    rerender(<Test />);
    screen.getByRole('button', { name: 'button 2' }).focus();
    rerender(<Test delete2 />);
    expect(screen.getByRole('button', { name: 'button 1' })).toHaveFocus();
  });

  it('does nothing is the removed element has no focus', () => {
    const { rerender } = render(<Test />);
    expect(document.body).toHaveFocus();
    rerender(<Test delete1 />);
    expect(document.body).toHaveFocus();
  });

  it('does nothing if there is no context', () => {
    const { rerender } = render(<TestNoContext />);
    expect(document.body).toHaveFocus();
    screen.getByRole('button', { name: 'button 1' }).focus();
    rerender(<Test delete1 />);
    expect(document.body).toHaveFocus();
  });
});
