import { Flex, Button, Img, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={10}
      padding={"0 100px"}
    >
      <Flex flexDir={"column"} flex={1}>
        <Text
          textTransform={"uppercase"}
          letterSpacing={"3.96px"}
          fontSize={"24px"}
          fontWeight={"300"}
        >
          Esquece o ponto manual
        </Text>
        <Text fontSize={"40px"} fontWeight={"800"}>
          Chegou a nova realidade para{" "}
          <span className="LPspanHeader">Controle de Pontos</span>
        </Text>
        <Text fontSize={"18px"} fontWeight={"500"}>
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>
        <Flex gap={3} marginTop={5}>
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
        <Img src="./floatingGuy.png" maxWidth={"700px"} height={"500"} />
      </Flex>
    </Flex>
  );
}
