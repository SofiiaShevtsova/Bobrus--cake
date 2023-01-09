import { Box } from '@chakra-ui/react';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import Header from './Header/Header';
import About from './About/About';
import Product from './Product/Product';
import { AddFeedback } from './AddFeedback/AddFeedback';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <Box
      w="100%"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textAlign="center"
      backgroundColor='rgba(245, 42, 137, 0.3)'
    >
      <Header />
      <About />
      <Product />
      <AddFeedback/>
      <Contacts />
      <Footer/>
      <ToggleTheme />
    </Box>
  );
};
