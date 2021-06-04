import { styled } from 'stitches.config';

const Button = styled('button', {
  border: 'none',
  outline: 'none',

  fontSize: '16px',
  borderRadius: '5px',
  px: '20px',
  py: '16px',
  width: '100%',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  '&:focus': {
    boxShadow: '0 0 0 1px lightgray',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '#6CCAFF',
        color: 'black',
        '&:hover': {
          backgroundColor: '#63B9EB',
        },
        '&:active': {
          backgroundColor: '#58A5D1',
        },
      },
      secondary: {
        color: '#eaeaea',
        backgroundColor: 'rgba(256,256,256,0.05)',
        '&:hover': {
          backgroundColor: 'rgba(256,256,256,0.1)',
        },
        '&:active': {
          backgroundColor: 'rgba(256,256,256,0.2)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
});

export default Button;
