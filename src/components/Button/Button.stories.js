import React from "react";

import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  decorators:[
    (Story) => (
      <div style={{ backgroundColor:"black" }}>
        <Story />
      </div>
    )
  ]
};

export const Primary = () => <Button variant="primary">Primary</Button>;

export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Success = () => <Button variant="success">Success</Button>;

export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryArgs = Template.bind({});

PrimaryArgs.args = {
  variant: "primary",
  children: "Primary Args",
};

PrimaryArgs.decorators = [
  (Story) => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Story />
    </div>
  ),
];

export const SecondaryArgs = Template.bind({});

SecondaryArgs.args = {
  variant: "secondary",
  children: "Secondary Args",
};

export const PrimaryLong = Template.bind({});

PrimaryLong.args = {
  ...PrimaryArgs,
  children: "Primary Long Args",
};
