import { Button, Flex, Img, Text, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CREATE_TIME, TIMES_REGISTREDS } from "../graphql";
import { useToast } from "@chakra-ui/react";
import UserTable from "../components/Table";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MeusRegistros() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [registerTime] = useMutation(CREATE_TIME);

  const toast = useToast();
  const currentDate = new Date();

  useEffect(() => {
    if (!userInfo.jwt) {
      navigate("/login");
    }
  }, []);

  const currentHour = `
    ${currentDate.getHours()}:${currentDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const currentDateFormatted = `${currentDate.getDate()}/${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;

  async function registerTimeEntry() {
    try {
      await registerTime({
        variables: {
          timeRegistered: currentDate.toISOString(),
          userId: userInfo.userId,
        },
        refetchQueries: [TIMES_REGISTREDS],
      });
      onClose();
      toast({
        title: "Sucesso!",
        description: "Seu ponto foi registrado com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Erro ao registrar ponto:", error);
    }
  }

  return (
    <Flex backgroundColor={"#f2f2f2"}>
      <Sidebar />
      {userInfo.role === "user" ? (
        <Flex flexDirection={"column"} width={"100%"} marginLeft={"180px"}>
          <Flex p={5}>
            <Button onClick={onOpen} variant={"pontogo"} padding={"0 30px"}>
              Registrar ponto
            </Button>
          </Flex>
          <UserTable filtered={true} />
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent
              textAlign={"center"}
              paddingY={12}
              fontFamily={"Poppins"}
            >
              <ModalHeader
                fontWeight={"700"}
                fontSize={"20px"}
                color={"#20292E"}
              >
                Registrar novo ponto
              </ModalHeader>
              <ModalCloseButton color={"#909497"} />
              <ModalHeader>
                <Img src="./clock.svg" margin={"auto"} />
                <Text
                  fontSize={"4xl"}
                  color={"var(--principal-color)"}
                  fontWeight={"700"}
                >
                  {currentHour}
                </Text>
                <Text
                  fontSize={"lg"}
                  color={"var(--principal-color)"}
                  fontWeight={"400"}
                  opacity={"0.5"}
                >
                  {currentDateFormatted}
                </Text>
              </ModalHeader>
              <ModalBody>
                <Flex flexDir={"column"} maxW={"50%"} margin={"auto"} gap={2}>
                  <Button variant={"pontogo"} onClick={registerTimeEntry}>
                    Bater ponto
                  </Button>
                  <Button
                    onClick={onClose}
                    variant={"outline"}
                    color={"var(--principal-color)"}
                    borderColor={"var(--principal-color)"}
                  >
                    Cancelar
                  </Button>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
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
          <Link to={"/dashboard"}>
            <Button variant={"pontogo"}>Voltar para Dashboard</Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
}
