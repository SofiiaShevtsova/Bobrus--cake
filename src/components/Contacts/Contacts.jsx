import { Heading, Wrap, WrapItem, Link, Center } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const Contacts = () => {
  return (
    <Center
      gap={{ base: '30px', md: '40px', lg: "80px"}}
      p="30px"
      id="contacts"
      backgroundColor="rgba(246, 135, 179, 0.534)"
      display={{ base: 'block', md: 'flex' }}
    >
      <Heading w={{ base: '100%', md: '50%', lg: '30%' }}>
        If you have any questions or want to place an order
      </Heading>
      <Wrap spacing="20px" fontSize={{base: '26px', md: '20px', lg: "24px"}}>
        <WrapItem w={{base: '100%', md:"45%"}}>
          <Link href="tel:+00000000000">
            <PhoneIcon mr="10px" />
            +00-000-000-000
          </Link>
        </WrapItem>
        <WrapItem w={{base: '100%', md:"45%"}}>
          <Link>Instagram</Link>
        </WrapItem>
        <WrapItem w={{base: '100%', md:"45%"}}>
          <Link href="emailto:valerija@mail.com">
            <EmailIcon mr="10px" />
            valerija@mail.com
          </Link>
        </WrapItem>
        <WrapItem w={{base: '100%', md:"45%"}}>
          <Link>Facebook</Link>
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default Contacts;
