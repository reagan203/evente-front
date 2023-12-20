import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex justify="center" p="4" bg="teal.500" color="white">
      <Breadcrumb fontWeight="medium" fontSize="m" spacing="8">
        <BreadcrumbItem>
          <Link as={RouterLink} to="/" color="white">
            HOME
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <Link as={RouterLink} to="/registration" color="white">
            REGISTRATION
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};
