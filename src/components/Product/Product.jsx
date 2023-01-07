import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Image,
} from '@chakra-ui/react';

const Product = () => {
  return (
    <Tabs defaultIndex={1} isFitted>
      <TabList>
        <Tab>Naruto</Tab>
        <Tab>Sasuke</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Image
            fit="cover"
            src="https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png"
          />
        </TabPanel>
        <TabPanel>
          <Image
            fit="cover"
            src="https://images5.alphacoders.com/810/thumbbig-810547.webp"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Product;
