import { forwardRef, PropsWithChildren } from 'react';
import { styled } from 'stitches.config';
import { useFormControlContext } from './FormControl';

const StyledLabel = styled('label', {
  display: "block",
  color: '$gray700',
  marginBottom: '5px',
});

type FormLabelProps = {};

function useFieldLabel(props: Record<string, any>) {
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
