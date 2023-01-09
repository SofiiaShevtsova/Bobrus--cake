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

const FormReviews = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      feedback: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex bg="gray.100" align="center" justify="center">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start" mb="10px">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                w="600px"
                name="name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="feedback">Feedback</FormLabel>
              <Textarea
                name="feedback"
                type="text"
                variant="filled"
                size="sm"
                resize="none"
                onChange={formik.handleChange}
                value={formik.values.feedback}
              />
            </FormControl>
          </VStack>
          <Button type="submit" colorScheme="pink">
            Add fedback
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default FormReviews;
