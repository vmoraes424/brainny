/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { TIMES_REGISTREDS } from "../graphql";
import { formatDateTime } from "../utils/dateFormater";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Dashboard() {
  const { data: times } = useQuery(TIMES_REGISTREDS);

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" margin={10}>
        <Button colorScheme="teal">
          <Link to={"/"}>Voltar</Link>
        </Button>
        <Text fontSize={30}>Área do Administrador</Text>
        <span></span>
      </Flex>
      <TableContainer
        maxWidth={"70%"}
        margin={"auto"}
        padding={3}
        borderRadius={10}
        border={"1px solid #e2e8f0"}
      >
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Pontos batidos dos colaboradores</TableCaption>
          <Thead>
            <Tr>
              <Th>Colaborador</Th>
              <Th>Horário do Ponto</Th>
            </Tr>
          </Thead>
          <Tbody>
            {times?.registeredTimes.map((time: any) => (
              <Tr>
                <Td key={time.id}>{time?.user?.name ?? "Colaborador Nulo"}</Td>
                <Td key={time.id}>
                  {time.timeRegistered === null
                    ? "Tempo não batido"
                    : formatDateTime(time.timeRegistered)}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
