import * as React from 'react';
import { Switch as BaseSwitch, SwitchOwnerState, SwitchProps as BaseSwitchProps } from '@mui/base/Switch';
import clsx from 'clsx';
import classes from './Switch.module.css';

export type SwitchProps = BaseSwitchProps;

const getRootSlotProps = (state: SwitchOwnerState) => {
	const rootClasses = clsx({
		[classes.root]: true,
		[classes.disabled]: state.disabled,
		[classes.checked]: state.checked,
		[classes.focusVisible]: state.focusVisible,
	});

	return { className: rootClasses };
};

const slotProps = {
	root: getRootSlotProps,
	input: {
		className: classes.input,
	},
	thumb: {
		className: classes.thumb,
	},
	track: {
		className: classes.track,
	},
};

export const Switch = React.forwardRef(function Switch(props: SwitchProps, ref: React.ForwardedRef<HTMLSpanElement>) {
	return <BaseSwitch {...props} slotProps={slotProps} ref={ref} />;
});
