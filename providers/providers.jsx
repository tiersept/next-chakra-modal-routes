import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/chakra.config';
import { SwrProvider } from './SwrProvider';

export function Providers({ children, fallback }) {
  return (
    <SwrProvider fallback={fallback}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SwrProvider>
  );
}
