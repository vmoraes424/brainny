import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { formatDateTime } from "../utils/dateFormater";
import { useQuery } from "@apollo/client";
import { TIMES_REGISTREDS } from "../graphql";

interface RegisteredUser {
  user: {
    id: string;
  };
}

interface RegisteredTime {
  id: number;
  user: {
    id: number;
    name: string;
  };
  timeRegistered: string | null;
}

export default function UserTable() {
  const { data } = useQuery(TIMES_REGISTREDS);

  const filteredUser = data?.registeredTimes.filter(
    (user: RegisteredUser) => user?.user?.id === "3"
  );
  return (
    <TableContainer
      maxWidth={"50%"}
      margin={"auto"}
      padding={3}
      borderRadius={10}
      border={"1px solid #e2e8f0"}
    >
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Seus pontos</TableCaption>
        <Thead>
          <Tr>
            <Th>Colaborador</Th>
            <Th>Horário do Ponto</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredUser?.map((time: RegisteredTime) => (
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
  );
}
