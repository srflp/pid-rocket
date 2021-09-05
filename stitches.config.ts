import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

const minWidth = (width: string) => `(min-width: ${width})`;

const stitches = createStitches({
  theme: {
    colors: {
      main: '#6CCAFF',
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
  media: {
    sm: minWidth('640px'),
    md: minWidth('768px'),
    lg: minWidth('1024px'),
    xl: minWidth('1280px'),
    '2xl': minWidth('1536px'),
  },
  utils: {
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof stitches>;
export const { styled, css, getCssText } = stitches;
