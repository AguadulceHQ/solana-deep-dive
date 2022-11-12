import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

function BalanceChecker(props: { handler: (address: string) => void }) {
  const { handler } = props;

  const [values, setValues] = useState({
    address: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handler(values.address);
  };

  const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues(() => ({
      ...values,
      address: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          id="public-key"
          type="text"
          placeholder="Please enter a valid Solana wallet and press ENTER ➡️"
          name="firstName"
          size="lg"
          value={values.address}
          onChange={handleAddressInputChange}
          width="2xl"
        />
      </InputGroup>
      <br />
    </form>
  );
}

export default BalanceChecker;
