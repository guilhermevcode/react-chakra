import React from "react";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export function Description() {
  return (
    <VStack
      alignItems="flex-start"
      marginX="24px"
      divider={<Box borderRadius="5px" h="15px" w="100px" bg="red" />}
    >
      <Text>Texto 1</Text>
      <Text>
        <Text as="span" fontWeight="extrabold">
          Texto
        </Text>{" "}
        2
      </Text>
      <HStack
        alignItems="flex-end"
        divider={<Box borderRadius="50%" h="10px" w="10px" bg="blue" />}
      >
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>
        <Text width="200px">Texto 5</Text>
      </HStack>
      <Text>Texto 6</Text>
    </VStack>
  );
}
