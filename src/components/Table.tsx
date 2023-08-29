/* eslint-disable @typescript-eslint/no-unused-vars */
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { TIMES_REGISTREDS } from "../graphql";
import { useState } from "react";
import Pagination from "./Pagination";
import UserTr from "./UserTr";

interface RegisteredUser {
  user: {
    id: string;
  };
}

export interface RegisteredTime {
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
  const usersPerPage = filtered ? 7 : 8;

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  const reversedRegisteredTimes = [...(data?.registeredTimes || [])].reverse();

  const filteredUser = reversedRegisteredTimes.filter(
    (user: RegisteredUser) => user?.user?.id === userInfo.userId
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
            <UserTr idx={idx} time={time} />
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
