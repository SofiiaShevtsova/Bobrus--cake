import { Suspense, lazy, useEffect } from 'react';
import {
  useColorMode,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
  Spinner,
  Box,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        colorScheme="purple"
        onClick={toggleColorMode}
        pos="fixed"
        top={'25%'}
        right={'30px'}
        zIndex={2}
      >
        {colorMode === 'light' ? (
          <MoonIcon boxSize={6} />
        ) : (
          <SunIcon boxSize={6} />
        )}
      </Button>
    </>
  );
}

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
