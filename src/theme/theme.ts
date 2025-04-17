import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    cisBlue: '#212ffc',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
