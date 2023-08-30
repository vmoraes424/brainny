import { Flex, Td, Text, Tr } from "@chakra-ui/react";
import { formatDate, formatTime } from "../utils/dateFormater";
import { RegisteredTime } from "./Table";

interface userTrProps {
  time: RegisteredTime;
  idx: number;
}

export default function UserTr({ time, idx }: userTrProps) {
  return (
    <Tr key={idx} bg={"white"}>
      <Td>
        <Flex>
          <span className="td-span"></span>
          <Flex flexDir={"column"}>
            <Text fontSize={"22px"} fontWeight={"700"} letterSpacing={"0.44px"}>
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
  );
}
