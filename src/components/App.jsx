import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { addFeedback, getFeedback } from 'service/feedback';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import Header from './Header/Header';
import About from './About/About';
import Product from './Product/Product';
import FeedbackList from './FeedbackList/FeedbackList';
import AddFeedback from './AddFeedback/AddFeedback';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

export const App = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const addFeedbackItem = item => {
    addFeedback(item);
    setFeedbackList(() => [...feedbackList, item]);
  };

  useEffect(() => {
    const getFeedbackAPI = async () => {
      try {
        const { data } = await getFeedback();
        if (data.length !== feedbackList.length) {
          setFeedbackList(() => [...data]);
        }
      } catch (error) {}
    };
    getFeedbackAPI();
  }, [feedbackList]);

  return (
    <Box
      w="100%"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textAlign="center"
      backgroundColor="rgba(246, 135, 179, 0.534)"
    >
      <Header />
      <About />
      <Product />
      <FeedbackList feedbackList={feedbackList} />
      <AddFeedback addFeedback={addFeedbackItem} />
      <Contacts />
      <Footer />
      <ToggleTheme />
    </Box>
  );
};
