import { forwardRef, PropsWithChildren } from 'react';
import { styled } from 'stitches.config';
import { useFormControlContext } from './FormControl';

// TODO allow using custom styled elements as FormLabel with "as" prop

const StyledLabel = styled('label', {
  display: 'block',
  color: '$gray700',
  marginBottom: '5px',
  width: 'fit-content',
  backdropFilter: 'blur(10px)',
  borderRadius: '3px',
});

type FormLabelProps = Record<string, never>;

function useFieldLabel(props: FormLabelProps) {
  const field = useFormControlContext();

  return {
    ...props,
    id: props.id ?? field?.labelId,
    htmlFor: props.htmlFor ?? field?.id,
  };
}

export const FormLabel = forwardRef<HTMLLabelElement, PropsWithChildren<FormLabelProps>>(
  (props, ref) => {
    const { children, ...rest } = props;
    const ownProps = useFieldLabel(rest);

    return (
      <StyledLabel ref={ref} {...ownProps}>
        {children}
      </StyledLabel>
    );
  },
);
FormLabel.displayName = 'FormLabel';
