import { Box } from '@chakra-ui/react';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import Header from './Header/Header';
import About from './About/About';
import Product from './Product/Product';

export const App = () => {
  return (
    <Box
      w="100%"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textAlign="center"
    >
      <Header />
      <About />
      <Product/>
      <ToggleTheme />
    </Box>
  );
};
