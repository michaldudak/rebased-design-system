import * as React from 'react';
import SelectUnstyled, { SelectUnstyledOwnerState, SelectUnstyledProps } from '@mui/base/SelectUnstyled';
import classes from './Select.module.css';
import clsx from 'clsx';

export enum SelectButtonVariant {
	filled = 'filled',
	outlined = 'outlined',
}

export interface SelectProps<Value extends {}> extends SelectUnstyledProps<Value> {
	variant?: SelectButtonVariant;
}

const listboxSlotProps = {
	className: classes.listbox,
};

export const Select = React.forwardRef(function Select<Value extends {}>(
	props: SelectProps<Value>,
	ref: React.ForwardedRef<HTMLButtonElement>
) {
	const { variant = SelectButtonVariant.filled, ...other } = props;

	const getRootSlotProps = React.useCallback(
		function getRootSlotProps<Value extends {}>(state: SelectUnstyledOwnerState<Value>) {
			const rootClasses = clsx({
				[classes.root]: true,
				[classes.active]: state.active,
				[classes.disabled]: state.disabled,
				[classes.open]: state.open,
				[classes.filled]: variant === SelectButtonVariant.filled,
				[classes.outlined]: variant === SelectButtonVariant.outlined,
			});

			return { className: rootClasses };
		},
		[variant]
	);

	return <SelectUnstyled {...other} slotProps={{ root: getRootSlotProps, listbox: listboxSlotProps }} ref={ref} />;
});
