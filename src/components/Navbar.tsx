import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Stack spacing={5} direction={"row"} padding={5}>
      <Button colorScheme="teal" variant={"link"}>
        <Link to={"/dashboard"}>Dashboard</Link>
      </Button>
      <Button colorScheme="teal" variant={"link"}>
        <Link to={"/meus-registros"}>Meus Pontos</Link>
      </Button>
    </Stack>
  );
}
