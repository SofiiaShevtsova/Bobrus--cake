import { Box, Heading, Text } from '@chakra-ui/react';
import makeCake from 'image/make-cake.jpg';

const About = () => {
  return (
    <Box
      minH="500px"
      w="1600px"
      m='0 auto'
      p="30px"
      backgroundImage={makeCake}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Prepared at home
      </Heading>
      <Text color="pink.300">
        Delicious cakes made only from the best products. Prepared at home with
        love.
      </Text>
    </Box>
  );
};

export default About;
