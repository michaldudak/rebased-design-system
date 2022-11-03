import * as React from 'react';
import OptionUnstyled, { OptionUnstyledOwnerState, OptionUnstyledProps } from '@mui/base/OptionUnstyled';
import classes from './Option.module.css';
import clsx from 'clsx';

export type OptionProps<Value extends {}> = OptionUnstyledProps<Value>;

function getRootSlotProps<Value extends {}>(state: OptionUnstyledOwnerState<Value>) {
	const rootClasses = clsx({
		[classes.root]: true,
		[classes.disabled]: state.disabled,
		[classes.highlighted]: state.highlighted,
		[classes.selected]: state.selected,
	});

	return { className: rootClasses };
}

export const Option = React.forwardRef(function Option<Value extends {}>(
	props: OptionProps<Value>,
	ref: React.ForwardedRef<HTMLLIElement>
) {
	return <OptionUnstyled {...props} slotProps={{ root: getRootSlotProps }} ref={ref} />;
});
