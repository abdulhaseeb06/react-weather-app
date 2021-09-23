import { Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiCloud } from "react-icons/bi";

export default function SearchResult() {
  function getCurrentDateTime() {
    return new Date().toUTCString();
  }

  return (
    <Stack>
      <Text color="red.600">{getCurrentDateTime()}</Text>
      <Heading as="h2" fontWeight="bold" fontSize="2xl">
        Lahore, Pakistan
      </Heading>
      <Spacer />
      <Flex>
        <BiCloud size="50px" />
        <Heading as="p">18 C</Heading>
      </Flex>
    </Stack>
  );
}
