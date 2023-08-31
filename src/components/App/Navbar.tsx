import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Img,
  useDisclosure,
  useMediaQuery,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  if (isSmallerThanMd) {
    return (
      <nav className="LPnav">
        <Flex align="center" justify="space-between">
          <Img src="./pontoGoWhite.svg" width={"164px"} />
          <Button
            m={4}
            onClick={() => handleClick("full")}
            color={"white"}
            variant={"pontogotwo"}
          >
            ☰
          </Button>
          <Drawer onClose={onClose} isOpen={isOpen} size={size} placement="top">
            <DrawerOverlay />
            <DrawerContent bg={"var(--principal-color)"}>
              <DrawerCloseButton color={"white"} />
              <DrawerHeader color={"white"}>Menu</DrawerHeader>
              <DrawerBody>
                <Flex gap={4}>
                  <Button variant="link" color="white">
                    <ChakraLink href="#">Início</ChakraLink>
                  </Button>
                  <Button variant="link" color="white">
                    <ChakraLink href="#precos">Planos</ChakraLink>
                  </Button>
                  <Button padding={"0 2rem"} color={"var(--principal-color)"}>
                    <Link to={"/login"}>Fazer login</Link>
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </nav>
    );
  }

  // Render the normal menu
  return (
    <nav className="LPnav">
      <Flex align="center" justify="space-between">
        <Img src="./pontoGoWhite.svg" width={"164px"} />
        <Flex gap={12}>
          <Button variant="link" color="white">
            <ChakraLink href="#">Início</ChakraLink>
          </Button>
          <Button variant="link" color="white">
            <ChakraLink href="#precos">Planos</ChakraLink>
          </Button>
          <Button padding={"0 2rem"} color={"var(--principal-color)"}>
            <Link to={"/login"}>Fazer login</Link>
          </Button>
        </Flex>
      </Flex>
    </nav>
  );
}
