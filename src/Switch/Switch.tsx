import * as React from 'react';
import SwitchUnstyled, { SwitchUnstyledProps, SwitchUnstyledOwnerState } from '@mui/base/SwitchUnstyled';
import classes from './Switch.module.css';
import clsx from 'clsx';

export type SwitchProps = SwitchUnstyledProps;

const getRootSlotProps = (state: SwitchUnstyledOwnerState) => {
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
	return <SwitchUnstyled {...props} slotProps={slotProps} ref={ref} />;
});
