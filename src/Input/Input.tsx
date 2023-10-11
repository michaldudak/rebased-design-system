import * as React from 'react';
import { Input as BaseInput, InputOwnerState, InputProps as BaseInputProps } from '@mui/base/Input';
import clsx from 'clsx';
import classes from './Input.module.css';

export enum InputSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

export type InputProps = BaseInputProps & {
	size?: InputSize;
};

export const Input = React.forwardRef(function Input(props: InputProps, ref: React.ForwardedRef<HTMLDivElement>) {
	const { size = InputSize.medium, ...other } = props;

	const getInputSlotProps = (state: InputOwnerState) => {
		const inputClasses = clsx({
			[classes.root]: true,
			[classes.small]: size === InputSize.small,
			[classes.large]: size === InputSize.large,
			[classes.disabled]: state.disabled,
		});

		return { className: inputClasses };
	};

	return <BaseInput {...other} slotProps={{ input: getInputSlotProps }} ref={ref} />;
});
