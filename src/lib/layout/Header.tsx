import { Box, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box marginRight="auto">
        <NextLink href="/balance">Balance Checker</NextLink>
      </Box>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
