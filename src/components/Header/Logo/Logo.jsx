import { Image, Box } from '@chakra-ui/react';
import cake from 'image/cake.png';
const Logo = () => {
  return (
    <Box>
      <Image boxSize="70px" objectFit="cover" src={cake} alt="cake" />
    </Box>
  );
};

export default Logo;
