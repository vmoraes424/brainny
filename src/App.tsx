/* eslint-disable @typescript-eslint/no-unused-vars */

import { Flex, Img, Text } from "@chakra-ui/react";
import Navbar from "./components/App/Navbar";
import Header from "./components/App/Header";
import Sponsor from "./components/App/Sponsor";

function App() {
  return (
    <Flex
      bg={"var(--bgPrimary)"}
      bgImg={"./bgTexture.png"}
      flexDirection={"column"}
      textColor={"white"}
      fontFamily={"Poppins"}
    >
      <Navbar />
      <Header />
      <Sponsor />
      <Flex margin={"6rem 0"} justifyContent={"center"} padding={"0 100px"}>
        <Flex flexDir={"column"} textAlign={"center"}>
          <Text fontSize={"40px"} fontWeight={"800"}>
            Encontre o plano perfeito
          </Text>
          <Text fontSize={"20px"} fontWeight={"400"} opacity={"0.7"}>
            Escolha o plano que melhor se encaixa na sua empresa e faça sua
            assinatura, dentro de 72h iremos liberar seus acessos.
          </Text>
        </Flex>
      </Flex>
      <Flex
        justify={"center"}
        borderTop="0.5px solid #8A53FF"
        borderBottom="0.5px solid #8A53FF"
        padding={"1rem 0"}
      >
        <Flex flexDir={"column"}>
          <Text fontFamily={"20px"} fontWeight={"700"}>
            @pontogo
          </Text>
          <Text fontSize={"16px"} fontWeight={"300"}>
            Se conecta com a gente
          </Text>
        </Flex>
        <Flex gap={10} margin={"0 5rem"}>
          <Img src="instagram.png" />
          <Img src="facebook.png" />
          <Img
            src="linkedin.png"
            backgroundColor={"white"}
            borderRadius={"10px"}
          />
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"16px"} fontWeight={"400"} padding={"4rem"}>
          PontoGo - Todos direitos reservados
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
