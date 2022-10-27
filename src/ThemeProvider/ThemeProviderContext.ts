import * as React from 'react';

export interface Theme {
	colors: {
		main?: string;
		mainText?: string;
		accent?: string;
		accentText?: string;
	};
}

interface ThemeProviderContextShape {
	setTheme: (theme: Theme) => void;
}

export const ThemeProviderContext = React.createContext<ThemeProviderContextShape | undefined>(undefined);
