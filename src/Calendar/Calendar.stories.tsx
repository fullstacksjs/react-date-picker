import type { Meta, StoryObj } from '@storybook/react';

import type { CalendarProps } from './Calendar';
import { Calendar } from './Calendar';

const meta = {
  title: 'Example/Header',
  component: Calendar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<CalendarProps>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
