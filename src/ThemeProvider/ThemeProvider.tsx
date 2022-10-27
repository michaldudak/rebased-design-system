import * as React from 'react';
import { Theme, ThemeProviderContext } from './ThemeProviderContext';

export interface ThemeProviderProps {
	children: React.ReactNode;
	theme: Theme;
}

function setTheme(theme: Theme, elementRef: React.RefObject<HTMLDivElement>) {
	if (!elementRef.current) {
		return;
	}

	const style = elementRef.current.style;

	style.setProperty('--main-color', theme.colors.main ?? null);
	style.setProperty('--main-text-color', theme.colors.mainText ?? null);
	style.setProperty('--accent-color', theme.colors.accent ?? null);
	style.setProperty('--accent-text-color', theme.colors.accentText ?? null);
}

export const ThemeProvider = React.forwardRef(function ThemeProvider(props: ThemeProviderProps, ref) {
	const { children, theme } = props;
	const elementRef = React.useRef<HTMLDivElement>(null);

	React.useImperativeHandle(
		ref,
		() => ({
			setTheme: (theme: Theme) => setTheme(theme, elementRef),
		}),
		[elementRef]
	);

	React.useLayoutEffect(() => {
		setTheme(theme, elementRef);
	}, [theme, elementRef]);

	const contextValue = React.useMemo(
		() => ({
			setTheme: (theme: Theme) => setTheme(theme, elementRef),
		}),
		[elementRef]
	);

	return (
		<ThemeProviderContext.Provider value={contextValue}>
			<div ref={elementRef}>{children}</div>
		</ThemeProviderContext.Provider>
	);
});
