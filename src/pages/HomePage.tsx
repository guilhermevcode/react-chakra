import React from "react";

import { Button, VStack } from "@chakra-ui/react";
import { Description } from "../components/Description";
import { Header } from "../components/Header";

const dadosDoSite = {
  title: "Cliente 2"
};

function HomePage() {
  return (
    <div className="App">
      <VStack>
        <Description />
        <Header title={dadosDoSite.title}>
          <Button>Menu</Button>
        </Header>
      </VStack>
    </div>
  );
}

export default HomePage;
