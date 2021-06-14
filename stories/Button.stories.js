import { Button } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Button(args);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Tretiary = Template.bind({});
Tretiary.args = {
  size: 'Tretiary',
  label: 'Button',
};

export const Destructive = Template.bind({});
Destructive.args = {
  size: 'Destructive',
  label: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  size: 'Ghost',
  label: 'Button',
};

export const Inline = Template.bind({});
Inline.args = {
  size: 'Inline',
  label: 'Button',
};
