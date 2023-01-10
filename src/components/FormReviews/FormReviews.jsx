import { useFormik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Textarea,
} from '@chakra-ui/react';

const FormReviews = ({addFeedback}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      feedback: '',
    },
    onSubmit: (values, actions) => {
      actions.setSubmitting(false);
      actions.resetForm();
      if (values.name.trim() === '' || values.feedback.trim() === '') {
        return;
      }
      addFeedback(values)
    },
  });
  return (
    <Flex
      align="center"
      justify="center"
      p="20px"
    >
      <Box
        bg="white"
        p={6}
        rounded="md"
        backgroundColor="rgba(246, 135, 179, 0.534)"
      >
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start" mb="10px">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                w="600px"
                name="name"
                type="text"
                variant="outline"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="feedback">Feedback</FormLabel>
              <Textarea
                name="feedback"
                type="text"
                variant="outline"
                size="sm"
                resize="none"
                onChange={formik.handleChange}
                value={formik.values.feedback}
              />
            </FormControl>
          </VStack>
          <Button type="submit" colorScheme="pink" color="inherit">
            Add fedback
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default FormReviews;
