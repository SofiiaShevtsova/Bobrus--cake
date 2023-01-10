import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const Navigate = () => {
  return (
    <Breadcrumb
      spacing="5px"
      fontSize={{ base: '10px', md: '2xl' }}
      color="white"
      separator={<ArrowRightIcon color="pink.300" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Bobrus-cake</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#product">Product</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#reviews">Reviews</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#contacts">Contacts</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Navigate;
