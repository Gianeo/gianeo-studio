import "../src/app/globals.css";
import type { Preview } from "@storybook/nextjs";
import React from "react";
import { switzer, azeretMono } from '../src/lib/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      toc: true, // Enable table of contents in docs
    },
    options: {
      storySort: {
        order: [
          'Foundation',
          ['Design Tokens', 'Colors', 'Typography'],
          'Patterns',
          ['Sections'],
          'Components',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${switzer.variable} ${azeretMono.variable} font-copy antialiased`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;