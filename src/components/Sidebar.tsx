import { Button, Divider, Flex, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

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
      <Flex position={"relative"} flexDirection={"column"}>
        {userInfo.role === "admin" ? (
          <SidebarButton
            imgSrc="./dashboard.svg"
            link="/dashboard"
            text="Dashboard"
          />
        ) : (
          <SidebarButton
            imgSrc="./notepad.svg"
            link="/meus-registros"
            text="Meus Registros"
          />
        )}
      </Flex>
      <Flex position={"absolute"} bottom={0} margin={5}>
        <Img src="./sair.svg" />
        <Button variant={"unstyled"} onClick={() => localStorage.clear()}>
          <Link to={"/login"}>Sair</Link>
        </Button>
      </Flex>
    </Flex>
  );
}
