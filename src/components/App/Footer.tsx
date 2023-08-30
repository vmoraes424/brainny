import { Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";

export default function Footer() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex flexDir={"column"}>
      <Flex
        justifyContent={"center"}
        flexDir={isSmallerThanMd ? "column" : "row"}
        borderTop="0.5px solid #8A53FF"
        borderBottom="0.5px solid #8A53FF"
        padding={"1rem 0"}
        alignItems={isSmallerThanMd ? "center" : ""}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          marginBottom={isSmallerThanMd ? "1rem" : ""}
        >
          <Text fontFamily={"20px"} fontWeight={"700"}>
            @pontogo
          </Text>
          <Text fontSize={"16px"} fontWeight={"300"}>
            Se conecta com a gente
          </Text>
        </Flex>
        <Flex gap={10} margin={isSmallerThanMd ? "" : "0 5rem"}>
          <Img src="instagram.png" />
          <Img src="facebook.png" />
          <Img
            src="linkedin.png"
            backgroundColor={"white"}
            borderRadius={"10px"}
          />
        </Flex>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text fontSize={"16px"} fontWeight={"400"} padding={"4rem"}>
          PontoGo - Todos direitos reservados
        </Text>
      </Flex>
    </Flex>
  );
}
