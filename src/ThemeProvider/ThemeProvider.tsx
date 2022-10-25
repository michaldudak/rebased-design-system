import * as React from 'react';

export interface Theme {
	colors: {
		main?: string;
		mainText?: string;
		accent?: string;
		accentText?: string;
	};
}

export interface ThemeProviderProps {
	children: React.ReactNode;
	theme: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
	const { children, theme } = props;
	const ref = React.useRef<HTMLDivElement>(null);

	React.useLayoutEffect(() => {
		if (!ref.current) {
			return;
		}

		ref.current.style.setProperty('--main-color', theme.colors.main ?? null);
		ref.current.style.setProperty('--main-text-color', theme.colors.mainText ?? null);
		ref.current.style.setProperty('--accent-color', theme.colors.accent ?? null);
		ref.current.style.setProperty('--accent-text-color', theme.colors.accentText ?? null);
	}, [theme]);

	return <div ref={ref}>{children}</div>;
}
