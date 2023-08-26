import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CREATE_TIME, TIMES_REGISTREDS } from "../graphql";
import { useToast } from "@chakra-ui/react";
import UserTable from "../components/UserTable";

export default function MeusRegistros() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [registerTime] = useMutation(CREATE_TIME);

  const toast = useToast();
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentHour = `
    ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  async function registerTimeEntry() {
    try {
      await registerTime({
        variables: { timeRegistered: currentDate.toISOString(), userId: 3 },
        refetchQueries: [TIMES_REGISTREDS],
      });
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
    <>
      <Flex justifyContent={"center"} margin={10}>
        <Text margin={"auto"} fontSize={"2rem"}>
          Área do Colaborador
        </Text>
      </Flex>
      <UserTable />
      <Button onClick={onOpen} colorScheme="facebook">
        Bater ponto
      </Button>
      <Flex alignItems={"center"} justifyContent={"center"} margin={10}></Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{formattedDate}</ModalHeader>
          <ModalCloseButton />
          <ModalHeader>
            <Text fontSize={"4xl"}>{currentHour}</Text>
          </ModalHeader>
          <ModalBody>
            <Button colorScheme="teal" onClick={registerTimeEntry}>
              Bater ponto
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
