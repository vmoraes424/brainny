import { Button, Flex, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface SidebarButtonProps {
  imgSrc: string;
  link: string;
  text: string;
}

export default function SidebarButton({
  imgSrc,
  link,
  text,
}: SidebarButtonProps) {
  return (
    <Button
      variant={"link"}
      borderRadius={"none"}
      paddingTop={30}
      paddingBottom={30}
      paddingRight={15}
      color={"var(--principal-color)"}
      borderLeft={"4px solid var(--principal-color)"}
      borderBottom={"0.1px solid rgba(0, 0, 0, 0.08);"}
    >
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"center"}
        fontSize={14}
      >
        <Img src={imgSrc} width={"24px"} />
        <Link to={link}>{text}</Link>
      </Flex>
    </Button>
  );
}
