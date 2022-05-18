import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#fff',
  black: '#000',
  brand: {
    800: '#1a365d',
    600: '#153e75',
    400: '#2a69ac',
  },
};

const components = {
  Modal: {
    baseStyle: {
      dialog: {
        borderRadius: '2xl',
        boxShadow: 'none',
      },
    },
    sizes: {
      // xl: {
      //   h: '56px',
      //   fontSize: 'lg',
      //   px: '32px',
      // },
    },
    // 3. We can add a new visual variant
    // variants: {
    //   'with-shadow': {
    //     bg: 'red.400',
    //     boxShadow: '0 0 2px 2px #efdfde',
    //   },
    // },
  },
};

export const theme = extendTheme({ colors, components });
