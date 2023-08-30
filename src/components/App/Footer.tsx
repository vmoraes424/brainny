import { Flex, Img, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex flexDir={"column"}>
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
