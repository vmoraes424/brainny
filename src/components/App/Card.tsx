import { Flex, Img, List, ListItem, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export type TypeCard = "bronze" | "prata" | "ouro" | "platina";
type CardProps = {
  type: TypeCard;
  selected?: boolean;
  isSmallerThanMd?: boolean;
  children?: ReactNode;
};

interface CardInfoProps {
  title: string;
  price: number;
  colaborators: number | string;
  registerArea: boolean;
  dashboard: boolean;
  colabAcess: boolean;
  help: boolean;
  email: boolean;
}

const info = {} as CardInfoProps;

export default function Card({
  type,
  selected,
  isSmallerThanMd,
  children,
}: CardProps) {
  switch (type) {
    case "bronze":
      info.title = "Plano Bronze";
      info.price = 30;
      info.colaborators = 5;
      info.registerArea = true;
      info.dashboard = true;
      info.colabAcess = true;
      info.help = false;
      info.email = false;
      break;
    case "prata":
      info.title = "Plano Prata";
      info.price = 50;
      info.colaborators = 10;
      info.registerArea = true;
      info.dashboard = true;
      info.colabAcess = true;
      info.help = false;
      info.email = false;
      break;
    case "ouro":
      info.title = "Plano Ouro";
      info.price = 100;
      info.colaborators = 20;
      info.registerArea = true;
      info.dashboard = true;
      info.colabAcess = true;
      info.help = true;
      info.email = false;
      break;
    case "platina":
      info.title = "Plano Platina";
      info.price = 200;
      info.colaborators = "Ilimitados";
      info.registerArea = true;
      info.dashboard = true;
      info.colabAcess = true;
      info.help = true;
      info.email = true;
      break;
    default:
      info.title = "Sem plano";
  }

  return (
    <Flex
      flexDir="column"
      border="1px solid var(--secundary-color)"
      borderRadius="10px"
      padding={"3rem 0"}
      width={"333px"}
      bgColor={`rgba(255, 255, 255, ${selected ? "0.08" : "0.1"})`}
      justifyContent="center"
      alignItems="center"
      backdropFilter="blur(2.5px)"
      marginTop={"3rem"}
    >
      <Text fontSize={"20px"} fontWeight={"400"}>
        {info.title}
      </Text>
      <Text fontSize={"50px"} fontWeight={"800"}>
        R${info.price}
      </Text>
      <Text
        fontSize={"16px"}
        fontWeight={"300"}
        color={"var(--secundary-color)"}
      >
        {info.colaborators === "Ilimitados"
          ? "Acessos ilimitados"
          : `Uso de ${info.colaborators} colaboradores`}
      </Text>
      <List
        spacing={3}
        color={"white"}
        fontSize={isSmallerThanMd ? "14px" : "16px"}
        fontWeight={"300"}
        paddingY={"1.5rem"}
      >
        <ListItem>
          {info.registerArea && (
            <Text>
              <Flex gap={2}>
                {info.registerArea ? (
                  <Img
                    src={"./check.svg"} // Substitua pelo caminho da sua imagem
                    alt="Área de meus registros"
                  />
                ) : (
                  <Img
                    src={"./x.svg"} // Substitua pelo caminho da sua imagem
                    alt="Área de meus registros"
                  />
                )}
                Área de meus registros
              </Flex>
            </Text>
          )}
        </ListItem>
        <ListItem>
          {info.dashboard && (
            <Flex gap={2}>
              <Img src={"./check.svg"} alt="Área de meus registros" />
              <Text>Dashboard</Text>
            </Flex>
          )}
        </ListItem>
        <ListItem>
          {info.colabAcess && (
            <Text>
              <Flex gap={2}>
                <Img src={"./check.svg"} alt="Área de meus registros" />
                {info.colaborators === "Ilimitados"
                  ? "Acesso ilimitado"
                  : `Acesso de ${info.colaborators} colaboradores`}
              </Flex>
            </Text>
          )}
        </ListItem>
        <ListItem>
          {info.help ? (
            <Flex gap={2}>
              <Img src={"./check.svg"} alt="Área de meus registros" />
              <Text>Suporte exclusivo</Text>
            </Flex>
          ) : (
            <Flex gap={2}>
              <Img src={"./x.svg"} alt="Área de meus registros" />
              <Text opacity={"0.3"}>Suporte exclusivo</Text>
            </Flex>
          )}
        </ListItem>
        <ListItem>
          {info.email ? (
            <Flex gap={2}>
              <Img src={"./check.svg"} alt="Área de meus registros" />
              <Text>Email corporativo</Text>
            </Flex>
          ) : (
            <Flex gap={2}>
              <Img src={"./x.svg"} alt="Área de meus registros" />
              <Text opacity={"0.3"}>Email corporativo</Text>
            </Flex>
          )}
        </ListItem>
      </List>
      {children}
    </Flex>
  );
}
