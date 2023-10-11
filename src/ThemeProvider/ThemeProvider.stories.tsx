import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, Theme } from '.';
import { Button } from '../Button';
import { Input } from '../Input';
import { Switch } from '../Switch';
import { Select, Option } from '../Select';

const meta: Meta<typeof ThemeProvider> = {
	title: 'ThemeProvider',
	component: ThemeProvider,
};

export default meta;

interface ThemeCustomizerProps {
	mainColor: string;
	mainTextColor: string;
	accentColor: string;
	accentTextColor: string;
	backgroundColor: string;
	backgroundTextColor: string;
	borderRadius: string;
}

function ThemeCustomizer(_: ThemeCustomizerProps) {
	return null;
}

const Template = (props: ThemeCustomizerProps) => {
	const theme: Theme = React.useMemo(
		() => ({
			colors: {
				main: props.mainColor,
				mainText: props.mainTextColor,
				accent: props.accentColor,
				accentText: props.accentTextColor,
			},
			shape: {
				borderRadius: props.borderRadius,
			},
		}),
		[props.mainColor, props.mainTextColor, props.accentColor, props.accentTextColor]
	);

	return (
		<ThemeProvider theme={theme}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '100px' }}>
				<Button>Button</Button>
				<Input />
				<Switch />
				<Select>
					<Option value={1}>One</Option>
					<Option value={2}>Two</Option>
					<Option value={3}>Three</Option>
				</Select>
			</div>
		</ThemeProvider>
	);
};

type Story = StoryObj<typeof ThemeCustomizer>;

export const Default: Story = {
	args: {
		mainColor: '#888',
		mainTextColor: '#fff',
		accentColor: '#111',
		accentTextColor: '#fff',
		backgroundColor: '#fff',
		backgroundTextColor: '#000',
		borderRadius: '4px',
	},
	render: (args) => <Template {...args} />,
};
