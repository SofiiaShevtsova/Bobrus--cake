import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Image,
  Center,
  Text,
} from '@chakra-ui/react';
import cake1 from 'image/cake1.jpg';
import cake2 from 'image/cake2.jpg';
import cake3 from 'image/cake3.jpg';
import cake4 from 'image/cake4.jpg';

const Product = () => {
  return (
    <Tabs defaultIndex={1} isFitted variant="soft-rounded" id="product" colorScheme="pink">
      <TabList backgroundColor="rgba(246, 135, 179, 0.534)">
        <Tab fontSize='24px' color='inherit'>Title</Tab>
        <Tab fontSize='24px' color='inherit'>Title</Tab>
        <Tab fontSize='24px' color='inherit'>Title</Tab>
        <Tab fontSize='24px' color='inherit'>Title</Tab>
      </TabList>

      <TabPanels backgroundColor="rgba(246, 135, 179, 0.534)">
        <TabPanel>
          <Center gap="70px">
            <Text w="50%" fontSize="24px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas non
              ducimus corporis iste illum cupiditate ex aliquid, possimus eaque
              voluptatum nihil expedita quaerat tenetur odio molestias suscipit
              debitis adipisci eligendi?
            </Text>

            <Image
              fit="cover"
              src={cake1}
              boxSize="500px"
              borderRadius="10px"
            />
          </Center>
        </TabPanel>
        <TabPanel>
          <Center gap="70px">
            <Image
              fit="cover"
              src={cake2}
              boxSize="500px"
              borderRadius="10px"
            />
            <Text w="50%" fontSize="24px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas non
              ducimus corporis iste illum cupiditate ex aliquid, possimus eaque
              voluptatum nihil expedita quaerat tenetur odio molestias suscipit
              debitis adipisci eligendi?
            </Text>
          </Center>
        </TabPanel>
        <TabPanel>
          <Center gap="70px">
            <Text w="50%" fontSize="24px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas non
              ducimus corporis iste illum cupiditate ex aliquid, possimus eaque
              voluptatum nihil expedita quaerat tenetur odio molestias suscipit
              debitis adipisci eligendi?
            </Text>
            <Image
              fit="cover"
              src={cake3}
              boxSize="500px"
              borderRadius="10px"
            />
          </Center>
        </TabPanel>
        <TabPanel>
          <Center gap="70px">
            <Image
              fit="cover"
              src={cake4}
              boxSize="500px"
              borderRadius="10px"
            />
            <Text w="50%" fontSize="24px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas non
              ducimus corporis iste illum cupiditate ex aliquid, possimus eaque
              voluptatum nihil expedita quaerat tenetur odio molestias suscipit
              debitis adipisci eligendi?
            </Text>
          </Center>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Product;
