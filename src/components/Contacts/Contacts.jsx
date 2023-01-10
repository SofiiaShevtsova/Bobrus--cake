import { Heading, Wrap, WrapItem, Link, Center } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const Contacts = () => {
  return (
    <Center gap="80px" p="30px" id="contacts" backgroundColor="rgba(246, 135, 179, 0.534)">
      <Heading w="30%">
        If you have any questions or want to place an order
      </Heading>
      <Wrap spacing="30px" fontSize='24px' >
        <WrapItem w="30%">
          <Link href="tel:+00000000000">
            <PhoneIcon mr="10px"/>
            +00-000-000-000
          </Link>
        </WrapItem>
        <WrapItem w="30%">
          <Link>Instagram</Link>
        </WrapItem>
        <WrapItem w="30%">
          <Link href="emailto:valerija@mail.com">
            <EmailIcon mr="10px"/>
            valerija@mail.com
          </Link>
        </WrapItem>
        <WrapItem w="30%">
          <Link>Facebook</Link>
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default Contacts;
