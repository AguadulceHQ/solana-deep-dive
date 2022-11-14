import { Badge, Box, Flex } from "@chakra-ui/react";
import * as web3 from "@solana/web3.js";
import { NextSeo } from "next-seo";
import { useState } from "react";

import BalanceChecker from "lib/components/balance/BalanceChecker";
import Headline from "lib/components/Headline";

const BalanceCheckerPage = () => {
  const [balance, setBalance] = useState(0);
  const [, setAddress] = useState("");
  const [executable, setExecutable] = useState(false);

  const addressSubmittedHandler = (addressToCheck: string) => {
    try {
      setAddress(addressToCheck);
      const key = new web3.PublicKey(addressToCheck);
      const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
      connection.getBalance(key).then((currentBalance) => {
        setBalance(currentBalance / web3.LAMPORTS_PER_SOL);
      });
      connection.getAccountInfo(key).then((accountInfo) => {
        if (accountInfo) setExecutable(accountInfo.executable);
      });
    } catch (error) {
      setAddress("");
      setBalance(0);
      setExecutable(false);
      // alert(error);
    }
  };

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
      <NextSeo title="BalanceChecker" />
      <Headline
        title="Check the balance 💰"
        description="Insert any valid Solana wallet address and get to know how big is the bag."
      />
      <BalanceChecker handler={addressSubmittedHandler} />
      <Box>
        <Badge colorScheme="green">{`Balance: ${balance}`} SOL</Badge>
      </Box>
      <Box>
        <Badge colorScheme="purple">{`Executable: ${executable}`}</Badge>
      </Box>
    </Flex>
  );
};

export default BalanceCheckerPage;
