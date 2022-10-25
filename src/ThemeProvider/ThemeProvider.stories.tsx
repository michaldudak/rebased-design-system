import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider, Theme } from './ThemeProvider';
import { Button } from '../Button';
import { Input } from '../Input';
import { Switch } from '../Switch';

export default {
	title: 'ThemeProvider',
	component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

interface ThemeCustomizerProps {
	mainColor: string;
	mainTextColor: string;
	accentColor: string;
	accentTextColor: string;
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
		}),
		[args.mainColor, args.mainTextColor, args.accentColor, args.accentTextColor]
	);

	return (
		<ThemeProvider theme={theme}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '100px' }}>
				<Button>Button</Button>
				<Input />
				<Switch />
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
};
