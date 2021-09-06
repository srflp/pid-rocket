import { forwardRef, PropsWithChildren } from 'react';
import { styled } from 'stitches.config';
import { FormControlOptions, useFormControl } from './FormControl';

const defaultTag = 'input';

const StyledInput = styled(defaultTag, {
  border: 'none',
  outline: 'none',

  '&:focus': {
    boxShadow: '0 0 0 1px lightgray',
  },
  borderRadius: '5px',
  width: '100%',
  px: '10px',
  py: '8px',
  fontSize: '18px',
  color: 'white',
  backgroundColor: 'rgba(256,256,256,0.05)',
  backdropFilter: 'blur(5px)',
});

type InputProps = FormControlOptions;

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputProps> & Partial<HTMLInputElement>
>((props, forwardedRef) => {
  const inputProps = useFormControl<HTMLInputElement>(props);

  return <StyledInput ref={forwardedRef} {...inputProps} />;
});
Input.displayName = 'Input';
