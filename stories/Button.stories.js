import { Button } from "./Button";

export default {
  title: "Example/Button",
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "ghost",
        "inline",
      ],
      table: {
        disable: true,
      },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    theme: "dark",
    size: "medium",
  },
};

const Template = (args) => Button(args);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary Button",
  variant: "tertiary",
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: "Destructive Button",
  variant: "destructive",
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Ghost Button",
  variant: "ghost",
};

export const Inline = Template.bind({});
Inline.args = {
  label: "Inline Button",
  variant: "inline",
};
