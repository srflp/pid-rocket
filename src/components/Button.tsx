import { styled } from 'stitches.config';

const Button = styled('button', {
  border: 'none',

  fontSize: '16px',
  borderRadius: '10px',
  px: '20px',
  py: '16px',
  width: '100%',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  variants: {
    variant: {
      primary: {
        background: `#f8f8f8`,
        boxShadow: `2px 2px 5px 1px #f8f8f878`,
        '&:hover': {
          background: `#e8e8e8`,
        },
        '&:active': {
          background: `linear-gradient(145deg, #d1d1d1, #f8f8f8)`,
        },
      },
      secondary: {
        color: '#eaeaea',
        fontSize: '14px',
        px: '4px',
        py: '12px',
        backgroundColor: 'rgba(256,256,256,0.05)',
        backdropFilter: 'blur(5px)',
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
