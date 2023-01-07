import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box minH="200px" p="30px">
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
