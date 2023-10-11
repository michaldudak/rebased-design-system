import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
	title: 'Switch',
	component: Switch,
	argTypes: {
		ref: { table: { disable: true } },
		slots: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	args: {
		disabled: false,
	},
};
