import { Box, Heading, Text } from '@chakra-ui/react';
import makeCake from 'image/make-cake.jpg';

const About = () => {
  return (
    <Box
      minH="500px"
      w="1600px"
      m="0 auto"
      p="30px"
      backgroundImage={makeCake}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Heading
        as="h1"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="8xl"
        fontWeight="extrabold"
        mt="120px"
        mb="50px"
      >
        Prepared at home
      </Heading>
      <Text color="pink.700" textAlign="start" w="30%" fontSize="xl">
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
