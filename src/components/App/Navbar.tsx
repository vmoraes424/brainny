import { Button, Flex, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="LPnav">
      <Img src="./pontoGoWhite.svg" width={"164px"} />
      <Flex gap={12}>
        <Button variant={"link"} color={"white"}>
          Início
        </Button>
        <Button variant={"link"} color={"white"}>
          Planos
        </Button>
        <Button padding={"0 2rem"} color={"var(--principal-color)"}>
          <Link to={"/login"}>Fazer login</Link>
        </Button>
      </Flex>
    </nav>
  );
}
