import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { ResponseApiProvider } from '~/providers/ResponseApiProvider';
import theme from '~/theme/theme';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <SessionProvider session={session}>
        <ResponseApiProvider>
          <Component {...pageProps} />
        </ResponseApiProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}
