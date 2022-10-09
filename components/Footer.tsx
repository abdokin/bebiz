import { Box, Container, Heading, Image, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
function Logo() {
  return (
    <Box>
      <Image w="64" src="/images/footer.svg" />
    </Box>
  );
}

function LinkStack() {
  return (
    <Stack w="44">
      <Link as={NextLink} href="/">
        About
      </Link>
      <Link as={NextLink} href="/">
        SEO
      </Link>
      <Link as={NextLink} href="/">
        B2b
      </Link>
      <Link as={NextLink} href="/">
        e-Commerce
      </Link>
    </Stack>
  );
}

function Footer() {
  return (
    <Container maxW="full" bg="primary.100" p="0" w="full">
      <Stack
        direction={"row"}
        spacing={"12"}
        alignItems="center"
        w="fit-content"
        margin={"auto"}
      >
        <Logo />
        <LinkStack />
        <LinkStack />
        <LinkStack />
      </Stack>
      <Box
        bg="darkbg.100"
        w="fit-content"
        margin={"auto"}
        color="lightbg.100"
        p="4"
      >
        <Heading fontSize={"14"} letterSpacing="8" px="4">
          © 2022 BeeBiz. All rights reserved
        </Heading>
      </Box>
    </Container>
  );
}

export default Footer;
