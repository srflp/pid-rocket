import React, { createContext, forwardRef, HTMLAttributes } from 'react';
import { styled } from 'stitches.config';
import { ariaAttr } from './utils';

const StyledFormControl = styled('div', {
  width: '100%',
});

export interface FormControlOptions {
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
}

interface FormControlContext extends FormControlOptions {
  id?: string;
}

interface FormControlProps extends HTMLAttributes<HTMLDivElement>, FormControlContext {}

function useFormControlProvider(props: FormControlContext) {
  const { id, isRequired, isDisabled, isInvalid, isReadOnly, ...htmlProps } = props;

  const labelId = `${id}-label`;

  return {
    id,
    labelId,
    isRequired: !!isRequired,
    isDisabled: !!isDisabled,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    htmlProps,
  };
}

type ControlContext = Omit<ReturnType<typeof useFormControlProvider>, 'htmlProps'>;

const FormControlContext = createContext<ControlContext | undefined>(undefined);
const FormControlProvider = FormControlContext.Provider;
export function useFormControlContext(): ControlContext | undefined {
  return React.useContext(FormControlContext);
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
  const { htmlProps, ...context } = useFormControlProvider(props);

  return (
    <FormControlProvider value={context}>
      <StyledFormControl role="group" {...htmlProps} ref={ref} />
    </FormControlProvider>
  );
});
FormControl.displayName = 'FormControl';

interface UseFormControlProps extends FormControlOptions {
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

export function useFormControl<T extends HTMLElement>(
  props: UseFormControlProps,
): UseFormControlProps & HTMLAttributes<T> {
  const field = useFormControlContext();

  const { isInvalid, isDisabled, isReadOnly, isRequired, ...rest } = props;

  return {
    ...rest,
    id: props.id ?? field?.id,
    disabled: props.disabled || isDisabled || field?.isDisabled,
    readOnly: props.readOnly || isReadOnly || field?.isReadOnly,
    required: props.required || isRequired || field?.isRequired,
    'aria-invalid': ariaAttr(isInvalid || field?.isInvalid),
    'aria-required': ariaAttr(isRequired || field?.isRequired),
    'aria-readonly': ariaAttr(isReadOnly || field?.isReadOnly),
  };
}
