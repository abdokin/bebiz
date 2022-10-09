import {
  Box,
  Container,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import type { NextPage } from "next";

function Section({ children }: { children: React.ReactNode }) {
  return (
    <Box as="section" w="full">
      {children}
    </Box>
  );
}
const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Box position={"relative"}>
          <Image src="/images/mainbg.svg" w="full" />
          <Heading
            position={"absolute"}
            top="20"
            left="15%"
            translateX="-50%"
            color={"primary.100"}
            w="fit-content"
            ml="4"
            fontSize={"6xl"}
          >
            A Web-based Digital Marketing Passionate
          </Heading>
        </Box>
      </Section>
      <Section>
        <Stack
          direction={"row"}
          w="fit-content"
          margin={"auto"}
          justifyContent="space-evenly"
          spacing={"12"}
          py="12"
        >
          <Box bg="darkbg.100" w="lg" color="primary.100" p="4">
            <Heading textAlign={"center"} maxW="md" py="4">
              A Custom-made Online Marketing Content Strategy
            </Heading>
            <hr />
            <Text py="4" px="4">
              Our digital marketing strategy consists of a step-by-step
              implementation which meets your business differences and
              requirements to stand out from your competitors.
            </Text>
            <UnorderedList px="4">
              <ListItem>Online Marketing Connection</ListItem>
              <ListItem>Online marketing Communication</ListItem>
              <ListItem>Online marketing Awareness</ListItem>
            </UnorderedList>
          </Box>
          <Box w="lg">
            <Image src="/images/bee.svg" w="full" h="44" />
            <hr />
            <Text py="4">
              We specialize in delivering a custom-made online marketing content
              strategy to companies targeting global markets regardless of their
              companies’ size. Whether they seek to reposition their internet
              marketing, social media marketing or they start the exportation
              markets with unclear internet marketing strategy but only a strong
              volition to have the first footstep on the digital online
              marketing world. 
            </Text>
          </Box>
        </Stack>
      </Section>
    </>
  );
};

export default Home;
