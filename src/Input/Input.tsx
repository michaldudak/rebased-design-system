import InputUnstyled, { InputUnstyledProps, inputUnstyledClasses } from '@mui/base/InputUnstyled';
import styled from '@emotion/styled';

export enum InputSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

export type InputProps = InputUnstyledProps & {
	size?: InputSize;
};

export const Input = styled(InputUnstyled)(({ size = InputSize.medium }: InputProps) => {
	let padding;
	let fontSize = '0.875rem';
	if (size === InputSize.small) {
		padding = '4px';
	} else if (size === InputSize.medium) {
		padding = '8px';
	} else {
		padding = '16px';
		fontSize = '1rem';
	}
	return `
	.${inputUnstyledClasses.input} {
		--input-color: #116466;
		background-color: transparent;
		font-family: 'Kanit', sans-serif;
		font-size: ${fontSize};
		padding: ${padding};
		border-radius: 4px;
		border: 2px solid var(--input-color);
		outline-offset: 0;
		outline: 0 solid var(--input-color);
		transition: outline-width 0.1s ease-in, outline-offset 0.1s ease-in;
		color: var(--input-color);

		&:hover:where(:not(.${inputUnstyledClasses.disabled})) {
			outline-width: 1px;
			outline-offset: 2px;
		}

		&:focus-visible {
			outline-width: 2px;
			outline-offset: 2px;
		}

		&.${inputUnstyledClasses.disabled} {
			opacity: 0.5;
		}
	}`;
});
