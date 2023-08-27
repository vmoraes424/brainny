import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { formatDate, formatTime } from "../utils/dateFormater";
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
    <TableContainer padding={3}>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Colaborador</Th>
            <Th>Data</Th>
            <Th>Hora</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredUser?.map((time: RegisteredTime) => (
            <Tr>
              <Td key={time.id}>{time?.user?.name ?? "Colaborador Nulo"}</Td>
              <Td key={time.id}>
                {time.timeRegistered === null
                  ? "Tempo nulo"
                  : formatDate(time.timeRegistered)}
              </Td>
              <Td key={time.id}>
                {time.timeRegistered === null
                  ? "Hora nula"
                  : formatTime(time.timeRegistered)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
