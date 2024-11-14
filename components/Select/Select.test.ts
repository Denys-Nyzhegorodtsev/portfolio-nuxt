import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Select from './index.vue';

interface SelectComponentInstance {
  isOpen: boolean;
}

describe('Select Component', () => {
  it('renders correctly with given options', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
      global: {
        mocks: {
          $style: {
            customSelect: 'customSelect',
            selectedOption: 'selectedOption',
            options: 'options',
            option: 'option',
            open: 'open',
            close: 'close',
          },
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.selectedOption').text()).toContain(
      'Select an option'
    );
  });

  it('displays options when clicked and selects an option', async () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
      global: {
        mocks: {
          $style: {
            customSelect: 'customSelect',
            selectedOption: 'selectedOption',
            options: 'options',
            option: 'option',
            open: 'open',
            close: 'close',
          },
        },
      },
    });

    await wrapper.find('.selectedOption').trigger('click');
    expect(wrapper.find('.options').isVisible()).toBe(true);

    await wrapper.findAll('.option').at(1)?.trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['option2']);
    expect(wrapper.find('.selectedOption').text()).toContain('Option 2');
  });

  it('closes options list when clicking outside', async () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];

    // Задаємо точний тип для `wrapper`
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
      attachTo: document.body,
      global: {
        mocks: {
          $style: {
            customSelect: 'customSelect',
            selectedOption: 'selectedOption',
            options: 'options',
            option: 'option',
            open: 'open',
            close: 'close',
          },
        },
      },
    }) as unknown as VueWrapper<SelectComponentInstance>;

    // Відкриваємо список опцій
    await wrapper.find('.selectedOption').trigger('click');
    expect(wrapper.vm.isOpen).toBe(true);

    // Клікаємо поза компонентом
    await document.body.click();
    expect(wrapper.vm.isOpen).toBe(false);
  });
});
