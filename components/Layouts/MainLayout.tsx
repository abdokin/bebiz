import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxW="100%" bg="lightbg.100" color="darkbg.100" p="0">
      {/* NavBar */}
      <NavBar />
      {/* content */}
      <Box>{children}</Box>
      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default MainLayout;
