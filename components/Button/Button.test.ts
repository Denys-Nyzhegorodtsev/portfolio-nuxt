import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Button from './index.vue';

describe('Button Component', () => {
  it('renders a button element when type is "button" and size is not "big"', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Click Me',
        type: 'button',
        size: 'small', // Розмір, який не дорівнює "big"
      },
      global: {
        mocks: {
          $style: {
            button: 'button',
            big: 'big',
          },
        },
      },
    });

    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Click Me');
    expect(button.classes()).toContain('button');
    expect(button.classes()).not.toContain('big');
  });

  it('renders a big button when size is "big"', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Big Button',
        type: 'button',
        size: 'big',
      },
      global: {
        mocks: {
          $style: {
            button: 'button',
            big: 'big',
          },
        },
      },
    });

    const button = wrapper.find('button');
    expect(button.classes()).toContain('button');
    expect(button.classes()).toContain('big');
  });

  it('renders a small download link when type is "download" and size is not "big"', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Download CV',
        type: 'download',
        url: '/path/to/cv.pdf',
        size: 'small',
      },
      global: {
        mocks: {
          $style: {
            button: 'button',
            big: 'big',
          },
        },
      },
    });

    const link = wrapper.find('a');
    expect(link.exists()).toBe(true);
    expect(link.attributes('href')).toBe('/path/to/cv.pdf');
    expect(link.attributes('download')).toBe('CV-Denys-Nyzhehorodtsev.pdf');
    expect(link.text()).toBe('Download CV');
    expect(link.classes()).toContain('button');
    expect(link.classes()).not.toContain('big');
  });

  it('renders a big download link when type is "download" and size is "big"', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Download CV',
        type: 'download',
        url: '/path/to/cv.pdf',
        size: 'big',
      },
      global: {
        mocks: {
          $style: {
            button: 'button',
            big: 'big',
          },
        },
      },
    });

    const link = wrapper.find('a');
    expect(link.exists()).toBe(true);
    expect(link.attributes('href')).toBe('/path/to/cv.pdf');
    expect(link.classes()).toContain('button');
    expect(link.classes()).toContain('big');
  });

  it('renders a link element when type is "link" and size is not specified', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Go to Link',
        type: 'link',
        url: '/some/path',
      },
      global: {
        mocks: {
          $style: {
            button: 'button',
            big: 'big',
          },
        },
      },
    });

    const link = wrapper.find('a');
    expect(link.exists()).toBe(true);
    expect(link.attributes('href')).toBe('/some/path');
    expect(link.text()).toBe('Go to Link');
    expect(link.classes()).toContain('button');
    expect(link.classes()).not.toContain('big');
  });
});
