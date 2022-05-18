import { TheHeader } from '@/components/TheHeader';
import { Box, VStack } from '@chakra-ui/react';

export const Layout = ({ children }) => (
  <VStack minH="100vh">
    <TheHeader />
    <Box as="main" w="full">
      {children}
    </Box>
  </VStack>
);
