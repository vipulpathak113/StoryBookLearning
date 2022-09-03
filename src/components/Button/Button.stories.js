import React from "react";

import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "black" }}>
        <Story />
      </div>
    ),
  ],
};

// export const Primary = () => <Button variant="primary">Primary</Button>;

// export const Secondary = () => <Button variant="secondary">Secondary</Button>;

// export const Success = () => <Button variant="success">Success</Button>;

// export const Danger = () => <Button variant="danger">Danger</Button>;

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

SecondaryArgs.argTypes = {
  variant: {
    options: ["primary", "secondary"],
    control: { type: "radio" },
  },
};

export const PrimaryLong = Template.bind({});

PrimaryLong.args = {
  variant: "primary",
  children: "Primary Long Args",
  rotationAxis: "y",
};

PrimaryArgs.parameters = { controls: { sort: "requiredFirst" } };

PrimaryLong.argTypes = {
  canRotate: {
    control: "boolean",
    description: 'overwritten description',
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  width: {
    control: { type: "number", min: 400, max: 1200, step: 50 },
    table: {
      category: "Dimensions",
      subCategory: "Button Dimenions",
    },
  },
  height: {
    control: { type: "range", min: 200, max: 1500, step: 50 },
    table: {
      category: "Dimensions",
      subCategory: "Button Dimenions",
    },
  },
  rawData: {
    control: "object",
    table: {
      disable: true,
    },
  },
  coordinates: {
    control: "object",
  },
  texture: {
    control: {
      type: "file",
      accept: ".png",
    },
  },
  position: {
    control: "radio",
    options: ["left", "right", "center"],
  },
  rotationAxis: {
    control: {
      type: "check",
      options: ["x", "y", "z"],
    },
  },
  scaling: {
    control: "select",
    options: [10, 50, 75, 100, 200],
  },
  label: {
    control: "text",
    if: { arg: "rotationAxis", eq: "y" },
  },
  meshColors: {
    control: {
      type: "color",
      presetColors: ["#ff0000", "#00ff00", "#0000ff"],
    },
  },
  revisionDate: {
    control: "date",
  },
  onClick: { action: 'clicked' },
};
