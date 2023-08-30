/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Img } from "@chakra-ui/react";
import Card, { TypeCard } from "./Card";
import { useState } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards: TypeCard[] = ["bronze", "prata", "ouro", "platina"];

  function nextCard() {
    setCurrentIndex((currentIndex + 1) % cards.length);
  }

  function previousCard() {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  }
  const visibleCardsIndices = [
    currentIndex,
    (currentIndex + 1) % cards.length,
    (currentIndex + 2) % cards.length,
  ];
  const selectedIndex = visibleCardsIndices[1];
  return (
    <Flex>
      <Img
        src="./leftarrow.svg"
        width={"40px"}
        onClick={() => previousCard()}
      />
      {visibleCardsIndices.map((index) => (
        <Card
          key={index}
          type={cards[index]}
          selected={index === selectedIndex}
        />
      ))}
      <Img src="./rightarrow.svg" width={"40px"} onClick={() => nextCard()} />
    </Flex>
  );
}
