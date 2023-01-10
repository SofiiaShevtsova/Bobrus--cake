import { Flex } from '@chakra-ui/react';
import Logo from './Logo/Logo';
import Navigate from './Navigate/Navigate';

const Header = () => {
  return (
    <Flex alignItems='center' gap="20px" p={{ base: '10px', md: "20px"}}>
      <Logo />
      <Navigate />
    </Flex>
  );
};

export default Header;
