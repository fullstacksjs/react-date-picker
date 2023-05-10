import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Calendar } from './Calendar';

describe('Calendar', () => {
  it('should mount the calendar', () => {
    render(<Calendar />);

    expect(screen.getByText(/Calendar/i)).toBeInTheDocument();
  });
});
