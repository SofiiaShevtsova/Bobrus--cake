import { Heading, Wrap, WrapItem, Link, Center } from '@chakra-ui/react';

const Contacts = () => {
  return (
      <Center gap="20px" p="30px">
          <Heading w='30%'>If you have any questions or want to place an order, all our contacts</Heading>
<Wrap w='70%'>
  <WrapItem bg='red.200'>
    <Link>
      Box 1
    </Link>
  </WrapItem>
  <WrapItem bg='red.200'>
    <Link>
      Box 2
    </Link>
  </WrapItem>
  <WrapItem bg='red.200'>
    <Link>
      Box 3
    </Link>
  </WrapItem>
  <WrapItem bg='red.200'>
    <Link>
      Box 4
    </Link>
  </WrapItem>
          </Wrap>
      </Center>
  );
};

export default Contacts;
