import { Flex, Img, SimpleGrid, Text, useMediaQuery } from "@chakra-ui/react";
import Navbar from "./components/App/Navbar";
import Header from "./components/App/Header";
import Footer from "./components/App/Footer";
import Slider from "./components/App/Slider";

function App() {
  const [isSmallerThanMd, isLargerThanLg, isLargerThanXl] = useMediaQuery([
    "(max-width: 768px)",
    "(min-width: 1024px)",
    "(min-width: 1280px)",
  ]);

  let gridColumns;

  if (isSmallerThanMd) {
    gridColumns = "1fr";
  }
  if (isLargerThanLg) {
    gridColumns = "2fr 2fr";
  }
  if (isLargerThanXl) {
    gridColumns = "1fr 1fr 1fr 1fr";
  }
  return (
    <Flex
      bg={"var(--bgPrimary)"}
      bgImg={"./bgTexture.png"}
      flexDirection={"column"}
      textColor={"white"}
      fontFamily={"Poppins"}
    >
      <Img
        src="./fumaca1.png"
        opacity={"0.5"}
        position={"absolute"}
        right={0}
        top={0}
      />
      <Navbar />
      <Img
        src="./fumaca2.png"
        opacity={"0.4"}
        position={"absolute"}
        left={0}
        bottom={"25%"}
      />
      <Header />
      <SimpleGrid
        width={isSmallerThanMd ? "100%" : "80%"}
        marginX={"auto"}
        padding={isSmallerThanMd ? "0 50px" : "0 100px"}
        marginTop={"4rem"}
        columns={isSmallerThanMd ? 1 : 4}
        templateColumns={gridColumns}
        placeItems={"center"}
        gap={4}
      >
        <Img src="./brainny_logo.png" minWidth="200px" />
        <Flex width="200px">
          <Img src="./AmoPetLeft.svg" />
          <Img src="./AmoPet.svg" />
        </Flex>
        <Img src="./bus.png" minWidth="200px" />
        <Flex width="200px">
          <Img src="./GoStudyLeft.png" />
          <Img src="./GoStudy.png" />
        </Flex>
      </SimpleGrid>
      <Flex
        margin={"6rem 0"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={isSmallerThanMd ? "0 50px" : "0 100px"}
        flexDir={"column"}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text fontSize={isSmallerThanMd ? "30px" : "40px"} fontWeight={"800"}>
            Encontre o plano perfeito
          </Text>
          <Text
            fontSize={"20px"}
            fontWeight={"400"}
            opacity={"0.7"}
            width={isSmallerThanMd ? "" : "50%"}
          >
            Escolha o plano que melhor se encaixa na sua empresa e faça sua
            assinatura, dentro de 72h iremos liberar seus acessos.
          </Text>
        </Flex>
        <Slider />
      </Flex>
      <Img
        src="./fumaca3.png"
        opacity={"0.4"}
        position={"absolute"}
        right={0}
        bottom={"10%"}
      />
      <Footer />
    </Flex>
  );
}

export default App;
