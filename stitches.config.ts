import { createCss, StitchesCss } from '@stitches/react';

const stitches = createCss({
  theme: {
    colors: {
      gray100: 'hsl(0 0% 98.8%)',
      gray200: 'hsl(0 0% 96.0%)',
      gray300: 'hsl(0 0% 93.7%)',
      gray400: 'hsl(0 0% 92.0%)',
      gray500: 'hsl(0 0% 89.5%)',
      gray600: 'hsl(0 0% 85.2%)',
      gray700: 'hsl(0 0% 80.0%)',
      gray800: 'hsl(0 0% 56.1%)',
      gray900: 'hsl(0 0% 43.9%)',
      gray1000: 'hsl(0 0% 7%)',
    },
  },
  utils: {
    m: () => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => (value) => ({
      marginTop: value,
    }),
    mr: () => (value) => ({
      marginRight: value,
    }),
    mb: () => (value) => ({
      marginBottom: value,
    }),
    ml: () => (value) => ({
      marginLeft: value,
    }),
    mx: () => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: () => (value) => ({
      paddingTop: value,
    }),
    pr: () => (value) => ({
      paddingRight: value,
    }),
    pb: () => (value) => ({
      paddingBottom: value,
    }),
    pl: () => (value) => ({
      paddingLeft: value,
    }),
    px: () => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export type CSS = StitchesCss<typeof stitches>;
export const { styled, css, getCssString } = stitches;
