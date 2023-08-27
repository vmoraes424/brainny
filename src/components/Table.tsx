/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Flex,
} from "@chakra-ui/react";
import { formatDate, formatTime } from "../utils/dateFormater";
import { useQuery } from "@apollo/client";
import { TIMES_REGISTREDS } from "../graphql";
import { useState } from "react";
import Pagination from "./Pagination";

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

interface TableProps {
  filtered: boolean;
}

export default function UserTable({ filtered }: TableProps) {
  const { data } = useQuery(TIMES_REGISTREDS);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const reversedRegisteredTimes = [...(data?.registeredTimes || [])].reverse();

  const filteredUser = reversedRegisteredTimes.filter(
    (user: RegisteredUser) => user?.user?.id === "3"
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = filtered
    ? filteredUser.slice(indexOfFirstUser, indexOfLastUser)
    : reversedRegisteredTimes.slice(indexOfFirstUser, indexOfLastUser);

  const totalUsers = filtered
    ? filteredUser.length
    : reversedRegisteredTimes.length;

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <TableContainer padding={3} margin={"0 1rem"}>
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th fontSize={"22px"} textTransform={"none"}>
              Colaborador
            </Th>
            <Th fontSize={"22px"} textTransform={"none"}>
              Data
            </Th>
            <Th fontSize={"22px"} textTransform={"none"}>
              Hora
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentUsers?.map((time: RegisteredTime, idx: number) => (
            <Tr key={idx} bg={"white"} className="user-table-tr">
              <Td>
                <Flex>
                  <span className="td-span"></span>
                  <Flex flexDir={"column"}>
                    <Text
                      fontSize={"22px"}
                      fontWeight={"700"}
                      letterSpacing={"0.44px"}
                    >
                      {time?.user?.name ?? "Colaborador Nulo"}
                    </Text>
                    <Text color={"var(--grey)"} opacity={"0.6"}>
                      00{time?.user?.id ?? "ID nulo"}
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td>
                <Text opacity={"0.6"} fontSize={"22px"}>
                  {time.timeRegistered === null
                    ? "Tempo nulo"
                    : formatDate(time.timeRegistered)}
                </Text>
              </Td>
              <Td>
                <Text opacity={"0.6"} fontSize={"22px"}>
                  {time.timeRegistered === null
                    ? "Hora nula"
                    : formatTime(time.timeRegistered)}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination
        totalUsers={totalUsers}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        paginate={paginate}
      />
    </TableContainer>
  );
}
