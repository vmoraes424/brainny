import {
  Flex,
  Button,
  Img,
  Text,
  useMediaQuery,
  Link as ChakraLink,
} from "@chakra-ui/react";

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
      zIndex={100}
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
            _hover={{ bgColor: "var(--secundary-color)" }}
          >
            Assinar agora
          </Button>
          <ChakraLink href="#precos">
            <Button
              variant={"outline"}
              color={"white"}
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              padding={"0 2rem"}
            >
              Ver planos
            </Button>
          </ChakraLink>
        </Flex>
      </Flex>
      <Flex flex={1} justifyContent={"center"} position={"relative"}>
        <Img
          src="./calendar.png"
          width={isSmallerThanMd ? "100px" : "166px"}
          position={"absolute"}
          bottom={isSmallerThanMd ? "0" : "50px"}
          left={isSmallerThanMd ? "50px" : "100px"}
        />
        <Img
          src="./floatingGuy.png"
          maxWidth={"700px"}
          height={isSmallerThanMd ? "300px" : "500px"}
        />
        <Img
          src="./not.png"
          transform={"rotate(15deg)"}
          width={isSmallerThanMd ? "130px" : "218px"}
          position={"absolute"}
          top={isSmallerThanMd ? "40px" : "70px"}
          right={isSmallerThanMd ? "8%" : "15%"}
        />
      </Flex>
    </Flex>
  );
}
