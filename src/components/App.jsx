import { Box } from '@chakra-ui/react';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import Header from './Header/Header';

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
      <Header/>
      <ToggleTheme />
    </Box>
  );
};
