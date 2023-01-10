import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import FormReviews from 'components/FormReviews/FormReviews';

const AddFeedback = ({addFeedback}) => {
  return (
    <Accordion defaultIndex={[1]} allowToggle colorScheme='pink'>
      <AccordionItem >
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="center"
              fontSize="24px"
            >
              Add feedback
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <FormReviews addFeedback={addFeedback}/>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AddFeedback
