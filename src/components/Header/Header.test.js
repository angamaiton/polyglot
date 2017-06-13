/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import App from '../App';
import Link from '../Link';
import Header from './Header';

describe('Header', () => {
  it('renders navigation correctly', () => {
    const wrapper = render(
      <App context={{ insertCss: () => {} }}>
        <Header />
      </App>,
    );
    expect(wrapper.find('a')).to.have.length(7);
  });
});
