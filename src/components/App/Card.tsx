import { Button, Flex, List, ListItem, Text } from "@chakra-ui/react";

export type TypeCard = "bronze" | "prata" | "ouro" | "platina";
type CardProps = {
  type: TypeCard;
  selected?: boolean;
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

export default function Card({ type, selected }: CardProps) {
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
      minWidth={"333px"}
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
        fontSize={"16px"}
        fontWeight={"300"}
        paddingY={"1.5rem"}
      >
        <ListItem>
          {info.registerArea && <Text>Área de meus registros</Text>}
        </ListItem>
        <ListItem>{info.dashboard && <Text>Dashboard</Text>}</ListItem>
        <ListItem>
          {info.colabAcess && (
            <Text>
              {info.colaborators === "Ilimitados"
                ? "Acesso ilimitado"
                : `Acesso de ${info.colaborators} colaboradores`}
            </Text>
          )}
        </ListItem>
        <ListItem>
          {info.help ? (
            <Text>Suporte exclusivo</Text>
          ) : (
            <Text opacity={"0.3"}>Suporte exclusivo</Text>
          )}
        </ListItem>
        <ListItem>
          {info.email ? (
            <Text>Email Corporativo</Text>
          ) : (
            <Text opacity={"0.3"}>Email Corporativo</Text>
          )}
        </ListItem>
      </List>
      {selected && (
        <Button padding={"1.5rem"} variant="pontogotwo">
          Assinar agora
        </Button>
      )}
    </Flex>
  );
}
