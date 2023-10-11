import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	argTypes: {
		ref: { table: { disable: true } },
		slots: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
		disabled: false,
		variant: ButtonVariant.filled,
		size: ButtonSize.medium,
		accented: false,
	},
};
