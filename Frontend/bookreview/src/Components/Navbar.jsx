import React from 'react';
import { Flex, Box, Heading, Spacer, Link, Button, Input } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex bg="blue.500" color="white" p={4}>
      <Box>
        <Heading size="md">BookishJourny</Heading>
      </Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/">
          <Button variant="link" mr={4} color="white">
            Home
          </Button>
        </Link>
        <Link as={RouterLink} to="/login">
          <Button variant="link" mr={4} color="white">
            Login
          </Button>
        </Link>
        <Link as={RouterLink} to="/signup">
          <Button variant="link" mr={4} color="white">
            Signup
          </Button>
        </Link>
        <Link as={RouterLink} to="/admin">
          <Button variant="link" mr={4} color="white">
            Admin
          </Button>
        </Link>
      </Box>
      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search..."
        size="sm"
        borderRadius="full"
        bgColor="white"
        _focus={{ borderColor: 'blue.200' }}
        display={{ base: 'none', md: 'block' }}
      />
    </Flex>
  );
};

export default Navbar;
