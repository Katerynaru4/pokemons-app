/**
 * @jest-enviroment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Layout from './index';

describe('Layout', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container != null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(
        <Layout>
          <p>Text</p>
        </Layout>,
        container,
      );
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('render with prop className', () => {
    act(() => {
      render(
        <Layout className="myClass">
          <p>Text</p>
        </Layout>,
        container,
      );
    });
    expect(container?.getElementsByClassName('myClass').length).toBe(1);
  });

  it('render with children <p>Text</p>', () => {
    act(() => {
      render(
        <Layout>
          <p>Text</p>
        </Layout>,
        container,
      );
    });
    expect(container?.textContent).toBe('Text');
    expect(container?.querySelector('p')).not.toBeNull();
  });
});
