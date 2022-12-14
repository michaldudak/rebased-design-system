import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider, Theme } from '.';
import { Button } from '../Button';
import { Input } from '../Input';
import { Switch } from '../Switch';
import { Select, Option } from '../Select';

export default {
	title: 'ThemeProvider',
	component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

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

const Template: ComponentStory<typeof ThemeCustomizer> = (args) => {
	const theme: Theme = React.useMemo(
		() => ({
			colors: {
				main: args.mainColor,
				mainText: args.mainTextColor,
				accent: args.accentColor,
				accentText: args.accentTextColor,
			},
			shape: {
				borderRadius: args.borderRadius,
			},
		}),
		[args.mainColor, args.mainTextColor, args.accentColor, args.accentTextColor]
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

export const Default = Template.bind({});
Default.args = {
	mainColor: '#888',
	mainTextColor: '#fff',
	accentColor: '#111',
	accentTextColor: '#fff',
	backgroundColor: '#fff',
	backgroundTextColor: '#000',
	borderRadius: '4px',
};
