import { Flex } from '@chakra-ui/react';
import Logo from './Logo/Logo';
import Navigate from './Navigate/Navigate';

const Header = () => {
  return (
    <Flex alignItems='center' gap="20px" bgColor="rgba(255, 79, 109, 0.5)" p="30px">
      <Logo />
      <Navigate />
    </Flex>
  );
};

export default Header;
