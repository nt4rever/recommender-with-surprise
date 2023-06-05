import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Demo from './Demo';

// describe is for grouping, it is for testing, test and it are the same
describe('Demo', () => {
  it('App mounts properly', () => {
    const wrapper = render(<Demo />);
    expect(wrapper).toBeTruthy();

    // Get by h1
    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('Demo');

    expect(screen.getByText('Demo')).toBeInTheDocument();
  });
});
