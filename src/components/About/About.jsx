import { Box, Center, Heading, Text } from '@chakra-ui/react';
import makeCake from 'image/make-cake.jpg';

const About = () => {
  return (
    <Box
      minH={{ base: '300px', md: '400px', xl:"500px"}}
      minW={{ base: "320px", md: '768px', lg: '960px', xl: '1200px', '2xl': '1536px',}}
      m="0 auto"
      p="30px"
      backgroundImage={makeCake}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Center><Heading
        as="h1"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize={{ base: "20px", md: "32px", lg: "8xl"}}
        fontWeight="extrabold"
        mt="120px"
        mb="50px"
      >
        Prepared at home
      </Heading></Center>
      
      <Text color="pink.700" textAlign="start" w="30%" fontSize="xl" display={{base: 'none', lg: 'block'}}>
        Delicious cakes made only from the best products. Prepared at home with
        love. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laudantium illum iste ullam, dolor deserunt ducimus explicabo numquam,
        maiores ratione est mollitia repellendus vel debitis, architecto laborum
        quas magni fuga aspernatur.
      </Text>
    </Box>
  );
};

export default About;
