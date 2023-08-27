/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@apollo/client";
import { TIMES_REGISTREDS } from "../graphql";
import { formatDate, formatTime } from "../utils/dateFormater";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  background,
  Stack,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const { data: times } = useQuery(TIMES_REGISTREDS);

  return (
    <Flex backgroundColor={"#f2f2f2"}>
      <Sidebar />
      <Flex flexDirection={"column"} width={"100%"} marginLeft={"180px"}>
        <TableContainer marginBottom={10} marginLeft={"20px"}>
          <Table variant={"unstyled"}>
            <Thead>
              <Tr>
                <Th>Colaborador</Th>
                <Th>Data</Th>
                <Th>Hora</Th>
              </Tr>
            </Thead>
            <Tbody>
              {times?.registeredTimes.map((time: any) => (
                <Tr
                  backgroundColor={"white"}
                  borderLeft={"5px solid #8A53FF"}
                  as="div"
                  style={{ marginBottom: "1rem" }}
                >
                  <Td key={time.id}>
                    {time?.user?.name ?? "Colaborador Nulo"}
                  </Td>
                  <Td key={time.id}>
                    {time.timeRegistered === null
                      ? "Data nula"
                      : formatDate(time.timeRegistered)}
                  </Td>
                  <Td key={time.id}>
                    {time.timeRegistered === null
                      ? "Tempo nulo"
                      : formatTime(time.timeRegistered)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}
