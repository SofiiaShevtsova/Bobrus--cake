// import { Suspense, lazy, useEffect } from 'react';
import {
  // Breadcrumb,
  // BreadcrumbItem,
  // BreadcrumbLink,
  // Flex,
  // Spacer,
  // Spinner,
  Box,
  // Center,
} from '@chakra-ui/react';
import ToggleTheme from './ToggleTheme/ToggleTheme';

export const App = () => {
  return (
    <Box
      w="100%"
      p="30px"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textAlign="center"
    >
      <ToggleTheme />
    </Box>
  );
};
