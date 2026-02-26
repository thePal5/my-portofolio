import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: mode('gray.50', '#0a0a0a')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });
export default theme;