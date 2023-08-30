import { Flex, Img } from "@chakra-ui/react";

export default function Sponsor() {
  return (
    <Flex
      justifyContent={"space-between"}
      width={"80%"}
      marginX={"auto"}
      bgImage={"./bgTexture.png"}
      padding={"0 100px"}
      marginTop={"4rem"}
    >
      <Img src="./brainny_logo.png" />
      <div className="flex">
        <Img src="./AmoPetLeft.svg" />
        <Img src="./AmoPet.svg" />
      </div>
      <Img src="./bus.png" />
      <div className="flex">
        <Img src="./GoStudyLeft.png" />
        <Img src="./GoStudy.png" />
      </div>
    </Flex>
  );
}
