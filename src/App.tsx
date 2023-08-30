/* eslint-disable @typescript-eslint/no-unused-vars */

import { Flex, Img, Text } from "@chakra-ui/react";
import Navbar from "./components/App/Navbar";
import Header from "./components/App/Header";
import Footer from "./components/App/Footer";
import Slider from "./components/App/Slider";

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
      <Flex
        justifyContent={"space-between"}
        width={"80%"}
        marginX={"auto"}
        bgImage={"./bgTexture.png"}
        padding={"0 100px"}
        marginTop={"4rem"}
      >
        <Img src="./brainny_logo.png" />
        <Flex>
          <Img src="./AmoPetLeft.svg" />
          <Img src="./AmoPet.svg" />
        </Flex>
        <Img src="./bus.png" />
        <Flex>
          <Img src="./GoStudyLeft.png" />
          <Img src="./GoStudy.png" />
        </Flex>
      </Flex>
      <Flex
        margin={"6rem 0"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"0 100px"}
        flexDir={"column"}
      >
        <Flex flexDir={"column"} textAlign={"center"}>
          <Text fontSize={"40px"} fontWeight={"800"}>
            Encontre o plano perfeito
          </Text>
          <Text fontSize={"20px"} fontWeight={"400"} opacity={"0.7"}>
            Escolha o plano que melhor se encaixa na sua empresa e faça sua
            assinatura, dentro de 72h iremos liberar seus acessos.
          </Text>
        </Flex>
        <Slider />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
