import ButtonUnstyled, { ButtonUnstyledProps, buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import styled from '@emotion/styled';

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

export const Button = styled(ButtonUnstyled)(
	({ variant = ButtonVariant.filled, size = ButtonSize.medium }: ButtonProps) => {
		let padding: string;
		let fontSize = '0.875rem';
		if (size === ButtonSize.small) {
			padding = '2px 6px';
		} else if (size === ButtonSize.medium) {
			padding = '6px 14px';
		} else {
			padding = '10px 22px';
			fontSize = '1rem';
		}
		return `
			--button-color: #116466;
			background-color: ${variant === ButtonVariant.filled ? 'var(--button-color)' : 'transparent'};
			font-family: 'Kanit', sans-serif;
			font-size: ${fontSize};
			padding: ${padding};
			border-radius: 2px;
			border: 2px solid var(--button-color);
			outline-offset: 0;
			outline: 0 solid var(--button-color);
			transition: outline-width 0.1s ease-in, outline-offset 0.1s ease-in;
			color: ${variant === ButtonVariant.filled ? '#fff' : 'var(--button-color)'};

			&:hover:where(:not(.${buttonUnstyledClasses.disabled})) {
				outline-width: 1px;
				outline-offset: 2px;
			}

			&:focus-visible {
				outline-width: 2px;
				outline-offset: 2px;
			}

			&.${buttonUnstyledClasses.disabled} {
				opacity: 0.5;
			}

			&.${buttonUnstyledClasses.active} {
				outline-offset: 4px;
				transition: outline-offset 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
			}
		`;
	}
) as React.FC<ButtonProps>;
