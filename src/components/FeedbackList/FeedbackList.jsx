import { Center, Heading, Text, Box } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeedbackList = ({ feedbackList }) => {
  return (<>
    <Center p="20px" display={{base: 'none', md:"flex"}} id='reviews'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={swiper => {}}
        onSlideChange={() => {}}
      >
        {feedbackList.length>0 && feedbackList.map(el => {
          return (
            <SwiperSlide key={el.id}>
              <Box
                w={{base: '200px', lg: '350px'}}
                h="300px"
                p="20px"
                bgColor="pink.500"
                textAlign="start"
                borderRadius="20px"
              >
                <Heading mb="10px" fontSize={{base:'18px', lg: '28px'}}>
                  {el.name}
                </Heading>
                <Text fontSize={{base:'16px', lg: '20px'}}>{el.feedback}</Text>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </Center>
      <Center p='50px' display={{base: 'flex', md:"none"}}>
<Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={swiper => {}}
        onSlideChange={() => {}}
      >
        {feedbackList.length>0 && feedbackList.map(el => {
          return (
            <SwiperSlide key={el.id}>
              <Box
                w='100%'
                h="300px"
                p="20px"
                bgColor="pink.500"
                textAlign="start"
                borderRadius="20px"
              >
                <Heading mb="10px" fontSize={{base:'18px', lg: '28px'}}>
                  {el.name}
                </Heading>
                <Text fontSize={{base:'16px', lg: '20px'}}>{el.feedback}</Text>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>      </Center>
      </>
  );
};
export default FeedbackList;
