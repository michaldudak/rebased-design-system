import * as React from 'react';
import ButtonUnstyled, { ButtonUnstyledOwnerState, ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import clsx from 'clsx';
import classes from './Button.module.css';

export enum ButtonVariant {
	filled = 'filled',
	outlined = 'outlined',
}

export enum ButtonSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

export interface ButtonProps extends ButtonUnstyledProps {
	accented?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
}

export const Button = React.forwardRef(function Button(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
	const { variant = ButtonVariant.filled, size = ButtonSize.medium, accented = false, ...other } = props;

	const getRootSlotProps = (state: ButtonUnstyledOwnerState) => {
		const rootClasses = clsx({
			[classes.root]: true,
			[classes.filled]: variant === ButtonVariant.filled,
			[classes.outlined]: variant === ButtonVariant.outlined,
			[classes.accented]: accented,
			[classes.small]: size === ButtonSize.small,
			[classes.large]: size === ButtonSize.large,
			[classes.active]: state.active,
			[classes.disabled]: state.disabled,
		});

		return { className: rootClasses };
	};

	return <ButtonUnstyled {...other} slotProps={{ root: getRootSlotProps }} ref={ref} />;
});
