/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import UserTable from "../components/Table";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  useEffect(() => {
    if (!userInfo.jwt) {
      navigate("/login");
    }
  }, []);

  return (
    <Flex backgroundColor={"#f2f2f2"}>
      <Sidebar />
      {userInfo.role === "admin" ? (
        <Flex flexDirection={"column"} width={"100%"} marginLeft={"180px"}>
          <UserTable filtered={false} />
        </Flex>
      ) : (
        <Flex
          width={"100%"}
          height={"100vh"}
          marginLeft={"180px"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={3}
        >
          <Text fontSize={"3xl"}>
            Você não tem permissão para acessar essa página
          </Text>
          <Link to={"/meus-registros"}>
            <Button variant={"pontogo"}>Voltar para Meus registros</Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
}
