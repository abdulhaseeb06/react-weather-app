import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

export default function Home() {
  return (
    <Container centerContent mt="4">
      <Box
        margin="4"
        padding="4"
        bgColor="gray.200"
        borderRadius="md"
        width="lg"
      >
        <Text fontSize="2xl" fontWeight="bold" align="center">
          Weather App
        </Text>
      </Box>

      <Box margin="4" borderRadius="md" width="lg">
        <Search></Search>
      </Box>

      <Box
        margin="4"
        padding="4"
        bgColor="gray.200"
        borderRadius="md"
        width="lg"
      >
        <SearchResult></SearchResult>
      </Box>
    </Container>
  );
}
