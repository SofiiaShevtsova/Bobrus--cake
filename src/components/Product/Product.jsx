import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Image,
  Center,
  Box,
  Text,
} from '@chakra-ui/react';
import cake1 from 'image/cake1.jpg';
import cake2 from 'image/cake2.jpg';
import cake3 from 'image/cake3.jpg';
import cake4 from 'image/cake4.jpg';

const Product = () => {
  return (
    <Tabs
      defaultIndex={0}
      isFitted
      variant="soft-rounded"
      id="product"
      colorScheme="pink"
    >
      <TabList backgroundColor="rgba(246, 135, 179, 0.534)">
        <Tab fontSize="24px" color="inherit">
          Title
        </Tab>
        <Tab fontSize="24px" color="inherit">
          Title
        </Tab>
        <Tab fontSize="24px" color="inherit">
          Title
        </Tab>
        <Tab fontSize="24px" color="inherit">
          Title
        </Tab>
      </TabList>

      <TabPanels backgroundColor="rgba(246, 135, 179, 0.534)">
        <TabPanel>
          <Box gap="100px" justifyContent="center" display={{ md: 'flex' }}>
            <Center
              w={{ base: '80%', md: '50%' }}
              m={{ base: '0 auto 10px auto', md: '0' }}
            >
              <Text fontSize={{ base: '18px', md: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                non ducimus corporis iste illum cupiditate ex aliquid, possimus
                eaque voluptatum nihil expedita quaerat tenetur odio molestias
                suscipit debitis adipisci eligendi?
              </Text>
            </Center>
            <Center>
              <Image
                fit="cover"
                src={cake1}
                boxSize="300px"
                borderRadius="10px"
              />
            </Center>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box gap="100px" justifyContent="center" display={{ md: 'flex' }}>
            <Center>
              <Image
                fit="cover"
                src={cake2}
                boxSize="300px"
                borderRadius="10px"
              />
            </Center>
            <Center
              w={{ base: '80%', md: '50%' }}
              m={{ base: '0 auto 10px auto', md: '0' }}
            >
              <Text fontSize={{ base: '18px', md: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                non ducimus corporis iste illum cupiditate ex aliquid, possimus
                eaque voluptatum nihil expedita quaerat tenetur odio molestias
                suscipit debitis adipisci eligendi?
              </Text>
            </Center>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box gap="100px" justifyContent="center" display={{ md: 'flex' }}>
            <Center
              w={{ base: '80%', md: '50%' }}
              m={{ base: '0 auto 10px auto', md: '0' }}
            >
              <Text fontSize={{ base: '18px', md: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                non ducimus corporis iste illum cupiditate ex aliquid, possimus
                eaque voluptatum nihil expedita quaerat tenetur odio molestias
                suscipit debitis adipisci eligendi?
              </Text>
            </Center>
            <Center>
              <Image
                fit="cover"
                src={cake3}
                boxSize="300px"
                borderRadius="10px"
              />
            </Center>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box gap="100px" justifyContent="center" display={{ md: 'flex' }}>
            <Center>
              <Image
                fit="cover"
                src={cake4}
                boxSize="300px"
                borderRadius="10px"
              />
            </Center>
            <Center
              w={{ base: '80%', md: '50%' }}
              m={{ base: '0 auto 10px auto', md: '0' }}
            >
              <Text fontSize={{ base: '18px', md: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                non ducimus corporis iste illum cupiditate ex aliquid, possimus
                eaque voluptatum nihil expedita quaerat tenetur odio molestias
                suscipit debitis adipisci eligendi?
              </Text>
            </Center>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Product;
