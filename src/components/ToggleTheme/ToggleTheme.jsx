import {
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        colorScheme="pink"
        onClick={toggleColorMode}
        pos="fixed"
        top={'5%'}
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

export default ToggleTheme