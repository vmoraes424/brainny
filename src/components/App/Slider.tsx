import {
  Button,
  Flex,
  Img,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Card, { TypeCard } from "./Card";
import { useState } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const cards: TypeCard[] = ["bronze", "prata", "ouro", "platina"];

  const defaultVisibleCardsCount = 1;
  const visibleCardsCount = useBreakpointValue({
    lg: defaultVisibleCardsCount,
    xl: 3,
  });

  function nextCard() {
    setCurrentIndex((currentIndex + 1) % cards.length);
  }

  function previousCard() {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  }

  const visibleCardsIndices = [];
  for (
    let i = currentIndex;
    i < currentIndex + (visibleCardsCount || defaultVisibleCardsCount);
    i++
  ) {
    visibleCardsIndices.push(i % cards.length);
  }
  const selectedIndex = visibleCardsIndices[1];
  const isSingleCardVisible = visibleCardsIndices.length === 1;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      transform={isSmallerThanMd ? "scale(0.8)" : ""}
      zIndex={100}
      id="precos"
    >
      <Img src="./leftarrow.svg" width={"40px"} onClick={previousCard} />
      {visibleCardsIndices.map((index, visibleIndex) => (
        <Card
          key={index}
          type={cards[index]}
          selected={index === selectedIndex}
          isSmallerThanMd={isSmallerThanMd}
        >
          {(isSingleCardVisible || visibleIndex === 1) && (
            <Button padding={"1.5rem"} variant="pontogotwo">
              Assinar agora
            </Button>
          )}
        </Card>
      ))}
      <Img src="./rightarrow.svg" width={"40px"} onClick={nextCard} />
    </Flex>
  );
}
