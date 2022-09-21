import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonVariant } from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		ref: { table: { disable: true } },
		component: { table: { disable: true } },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
	disabled: false,
	variant: ButtonVariant.filled,
};
