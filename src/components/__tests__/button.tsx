import React from 'react';
import { cleanup, render } from '../../test-utils';
import Button from '../button';

describe('Button', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    render(<Button>Hello World</Button>);
  });
});
