/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import UserTable from "../components/Table";

export default function Dashboard() {
  return (
    <Flex backgroundColor={"#f2f2f2"}>
      <Sidebar />
      <Flex flexDirection={"column"} width={"100%"} marginLeft={"180px"}>
        <UserTable filtered={false} />
      </Flex>
    </Flex>
  );
}
