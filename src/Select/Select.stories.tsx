import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, SelectButtonVariant, Option } from '.';

export default {
	title: 'Select',
	component: Select,
	argTypes: {
		ref: { table: { disable: true } },
		component: { table: { disable: true } },
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
	<Select {...args}>
		<Option value={1}>One</Option>
		<Option value={2}>Two</Option>
		<Option value={3}>Three</Option>
	</Select>
);

export const Default = Template.bind({});
Default.args = {
	disabled: false,
	variant: SelectButtonVariant.filled,
};
