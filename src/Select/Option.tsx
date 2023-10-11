import * as React from 'react';
import { Option as BaseOption, OptionOwnerState, OptionProps as BaseOptionProps } from '@mui/base/Option';
import classes from './Option.module.css';
import clsx from 'clsx';

export type OptionProps<Value extends {}> = BaseOptionProps<Value>;

function getRootSlotProps<Value extends {}>(state: OptionOwnerState<Value>) {
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
	return <BaseOption {...props} slotProps={{ root: getRootSlotProps }} ref={ref} />;
});
