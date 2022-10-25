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
	size?: ButtonSize;
	variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
	const { variant = ButtonVariant.filled, size = ButtonSize.medium, ...other } = props;

	const getRootSlotProps = (state: ButtonUnstyledOwnerState) => {
		const rootClasses = clsx({
			[classes.root]: true,
			[classes.filled]: variant === ButtonVariant.filled,
			[classes.outlined]: variant === ButtonVariant.outlined,
			[classes.small]: size === ButtonSize.small,
			[classes.large]: size === ButtonSize.large,
			[classes.active]: state.active,
			[classes.disabled]: state.disabled,
		});

		return { className: rootClasses };
	};

	return <ButtonUnstyled {...other} slotProps={{ root: getRootSlotProps }} />;
}
