import { fireEvent, getByText, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Counter from './Counter';

describe('Test Counter component', () => {
  test('counter is mounted', () => {
    const wrapper = render(<Counter />);
    expect(wrapper).toBeTruthy();
  });

  test('Click the button', () => {
    const wrapper = render(<Counter />);
    const button = wrapper.container.querySelector('button') as HTMLButtonElement;

    expect(button.textContent).toBe('Count is : 0');

    fireEvent(
      getByText(button, 'Count is : 0'),
      new MouseEvent('click', {
        bubbles: true
      })
    );

    expect(button.textContent).toBe('Count is : 1');
  });

  it('h1 title', () => {
    const wrapper = render(<Counter />);
    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('This is a counter');
  });
});
