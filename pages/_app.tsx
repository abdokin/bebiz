import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import MainLayout from "../components/Layouts/MainLayout";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    100: "#EDBE16",
  },
  lightbg: {
    100: "#FDFDFD",
  },
  darkbg: {
    100: "#0A0909",
  },
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
