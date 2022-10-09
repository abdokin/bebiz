import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import { NavLinks } from "../data/Nav";
import CustomeLink from "./utils/CustomeLink";

function Links() {
  return (
    <Flex gap="4" justifySelf={"end"}>
      {NavLinks.map((link) => {
        return <CustomeLink path={link.path} label={link.label} />;
      })}
    </Flex>
  );
}
function Logo() {
  return (
    <Box>
      <Image w="44" src="/images/logo.svg" />
    </Box>
  );
}

const NavBar = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        p="4"
        alignItems={"center"}
        w="full"
        
      >
        <Logo />
        <Links />
      </Stack>
    </Box>
  );
};

export default NavBar;
