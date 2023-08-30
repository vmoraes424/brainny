import { Flex, Button, Img, Text, useMediaQuery } from "@chakra-ui/react";

export default function Header() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const [isLargerThanLg] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      flexDirection={isLargerThanLg ? "column" : "row"}
      justifyContent={isSmallerThanMd ? "center" : "space-between"}
      alignItems={"center"}
      marginTop={10}
      padding={isSmallerThanMd ? "0 20px" : "0 100px"}
      overflowX={"hidden"}
    >
      <Flex flexDir={"column"} flex={1} marginBottom={isSmallerThanMd ? 4 : 0}>
        <Text
          textTransform={"uppercase"}
          letterSpacing={"3.96px"}
          fontSize={"24px"}
          fontWeight={"300"}
          textAlign={isSmallerThanMd ? "center" : "left"}
        >
          Esquece o ponto manual
        </Text>
        <Text
          fontSize={isSmallerThanMd ? "30px" : "40px"}
          fontWeight={"800"}
          textAlign={isSmallerThanMd ? "center" : "left"}
        >
          Chegou a nova realidade para{" "}
          <span className="LPspanHeader">Controle de Pontos</span>
        </Text>
        <Text
          fontSize={"18px"}
          fontWeight={"500"}
          textAlign={isSmallerThanMd ? "center" : "left"}
        >
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>
        <Flex
          gap={3}
          marginTop={5}
          justifyContent={isSmallerThanMd ? "center" : "flex-start"}
        >
          <Button
            bg={"var(--secundary-color)"}
            color={"white"}
            padding={"0 2rem"}
          >
            Assinar agora
          </Button>
          <Button variant={"outline"} color={"white"} padding={"0 2rem"}>
            Ver planos
          </Button>
        </Flex>
      </Flex>
      <Flex flex={1} justifyContent={"center"}>
        <Img
          src="./floatingGuy.png"
          maxWidth={"700px"}
          height={isSmallerThanMd ? "300px" : "500px"}
        />
      </Flex>
    </Flex>
  );
}
