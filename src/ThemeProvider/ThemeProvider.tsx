import * as React from 'react';
import { Theme } from './ThemeProviderContext';

export interface ThemeProviderProps {
	children: React.ReactNode;
	theme: Theme;
}

function camelToKebab(text: string) {
	return text.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}

function generateCssProperties(theme: Theme) {
	const properties = new Map<string, string>();

	Object.entries(theme.colors).forEach(([name, value]) => {
		properties.set(`--color-${camelToKebab(name)}`, value);
	});

	Object.entries(theme.shape).forEach(([name, value]) => {
		properties.set(`--shape-${camelToKebab(name)}`, value);
	});

	return Object.fromEntries(properties) as React.CSSProperties;
}

export function ThemeProvider(props: ThemeProviderProps) {
	const { children, theme } = props;

	const cssProperties = React.useMemo(() => generateCssProperties(theme), [theme]);

	return <div style={cssProperties}>{children}</div>;
}
