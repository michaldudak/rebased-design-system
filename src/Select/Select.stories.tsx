import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectButtonVariant, Option } from '.';

const meta: Meta<typeof Select> = {
	title: 'Select',
	component: Select,
	argTypes: {
		ref: { table: { disable: true } },
		slots: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: (args) => (
		<Select {...args}>
			<Option value={1}>One</Option>
			<Option value={2}>Two</Option>
			<Option value={3}>Three</Option>
		</Select>
	),
	args: {
		disabled: false,
		variant: SelectButtonVariant.filled,
	},
};
