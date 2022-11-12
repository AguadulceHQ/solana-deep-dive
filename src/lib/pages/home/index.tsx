import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Headline from "lib/components/Headline";
import SomeImage from "lib/components/samples/SomeImage";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <Headline
        title="Deep Dive on Solana"
        description="This repo contains us fooling around the Solana ecosystem."
      />
      <SomeImage />
    </Flex>
  );
};

export default Home;
