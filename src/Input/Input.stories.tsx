import { Meta, StoryObj } from '@storybook/react';
import { Input, InputSize } from './Input';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	argTypes: {
		ref: { table: { disable: true } },
		slots: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Multiline: Story = {
	args: {
		size: InputSize.medium,
		multiline: true,
	},
};
