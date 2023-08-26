import { Button, Divider, Flex, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Flex
      height={"100vh"}
      backgroundColor={"white"}
      position={"fixed"}
      flexDirection={"column"}
      width={180}
      shadow={"lg"}
    >
      <Img src="./pontogo.svg" margin={30} />
      <Divider />
      <Flex position={"relative"}>
        <Button
          colorScheme="teal"
          variant={"link"}
          borderRadius={"none"}
          padding={30}
          color={"#330693"}
          borderLeft={"4px solid #330693"}
        >
          <Flex alignItems={"center"} gap={2}>
            <Img src="./dashboard.svg" width={8} />
            <Link to={"/dashboard"}>Dashboard</Link>
          </Flex>
        </Button>
        {/* <Button colorScheme="teal" variant={"link"}>
        <Link to={"/meus-registros"}>Meus Pontos</Link>
      </Button> */}
      </Flex>
      <Flex position={"absolute"} bottom={0} margin={5}>
        <Img src="./sair.svg" />
        <Button variant={"unstyled"}>
          <Link to={"/login"}>Sair</Link>
        </Button>
      </Flex>
    </Flex>
  );
}
