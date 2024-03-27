import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';

import Contact from '../Contact';

describe('Contact', () => {
  test('renders Contact component', () => {
    render(<Contact />);

    expect(document.querySelector('.contactContainer')).toBeInTheDocument();

    expect(document.querySelector('label[for="name"]')).toBeInTheDocument();

    expect(document.querySelector('label[for="email"]')).toBeInTheDocument();

    expect(document.querySelector('button[type="submit"]')).toBeInTheDocument();

    expect(document.querySelector('.formContainer')).toBeInTheDocument();

    expect(document.querySelector('.formField')).toBeInTheDocument();
  });

  test('validates form inputs', async () => {
    const { getByLabelText, getByRole } = render(<Contact />);

    const inputName = getByLabelText('Full Name:');
    await inputName.focus();
    await inputName.blur();

    const inputEmail = getByLabelText('Email:');
    await inputEmail.focus();
    await inputEmail.blur();

    const submitButton = getByRole('button', { name: 'Send' });
    await submitButton.click();
  });
});
