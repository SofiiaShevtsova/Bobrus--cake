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
import cake12 from 'image/cake12.jpg';
import cake2 from 'image/cake2.jpg';
import cake3 from 'image/cake3.jpg';
import cake4 from 'image/cake4.jpg';

const Product = () => {
  return (
    <Tabs defaultIndex={1} isFitted variant="soft-rounded" colorScheme="pink">
      <TabList backgroundColor="rgba(246, 135, 179, 0.534)">
        <Tab>Фрукти</Tab>
        <Tab>Написи</Tab>
        <Tab>Без оформлення</Tab>
        <Tab>Шоколад</Tab>
      </TabList>

      <TabPanels backgroundColor="rgba(246, 135, 179, 0.534)">
        <TabPanel>
          <Center gap="30px">
            <Image
              fit="cover"
              src={cake1}
              boxSize="400px"
              borderRadius="10px"
            />
            <Image
              fit="cover"
              src={cake12}
              boxSize="400px"
              borderRadius="10px"
            />
            <Image
              fit="cover"
              src={cake2}
              boxSize="400px"
              borderRadius="10px"
            />
          </Center>
        </TabPanel>
        <TabPanel>
          <Center gap="20px">
            <Image
              fit="cover"
              src={cake2}
              boxSize="400px"
              borderRadius="10px"
            />
            <Text w="50%">
Description of the cake
            </Text>
          </Center>
        </TabPanel>
        <TabPanel>
          <Center gap="20px">
                        <Text w="50%">
Description of the cake
            </Text>

            <Image
              fit="cover"
              src={cake3}
              boxSize="400px"
              borderRadius="10px"
            />
          </Center>
        </TabPanel>
        <TabPanel>
          <Center>
            <Image
              fit="cover"
              src={cake4}
              boxSize="400px"
              borderRadius="10px"
            />
          </Center>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Product;
