import React from "react"
import '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
}

export const decorators = [
  (Story) => (
    <div style={{ margin:"10px" }}>
      {Story()}
    </div>
  )
]