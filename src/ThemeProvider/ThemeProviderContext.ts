import * as React from 'react';

export interface Theme {
	colors: {
		main?: string;
		mainText?: string;
		accent?: string;
		accentText?: string;
		background?: string;
		backgroundText?: string;
	};
	shape: {
		borderRadius?: string;
	};
}

interface ThemeProviderContextShape {
	setTheme: (theme: Theme) => void;
}

export const ThemeProviderContext = React.createContext<ThemeProviderContextShape | undefined>(undefined);
