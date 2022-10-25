import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input, InputSize } from './Input';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		ref: { table: { disable: true } },
		component: { table: { disable: true } },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: InputSize.medium,
};

export const Multiline = Template.bind({});
Multiline.args = {
	multiline: true,
	size: InputSize.medium,
};
