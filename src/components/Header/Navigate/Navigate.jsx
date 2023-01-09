import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const Navigate = () => {
  return (
    <Breadcrumb spacing='8px' fontSize='2xl' color='rgba(210, 10, 90, 0.6)' separator={<ArrowRightIcon color='pink.500' />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Bobrus-cake</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#about">About us</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#product">Product</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="contacts">Contacts</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Navigate;
