/* eslint-disable @typescript-eslint/no-unused-vars */
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Button,
  Img,
  Text,
  Heading,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("admin@brainny.cc");
  const [password, setPassword] = useState("adminregister");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [loading, setLoading] = useState(false);

  async function submitForm() {
    try {
      setLoading(true);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <Flex fontFamily={"Poppins"}>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Flex
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Img src="./loginIMG.png" alt="Pessoas" />
          <Text color={"#330693"} fontSize={40} fontWeight={"700"}>
            Bem vindo ao PontoGo
          </Text>
          <Text
            fontSize={"25px"}
            fontWeight={"400"}
            textAlign={"center"}
            color={"#330693"}
            opacity={"0.7"}
            width={"400px"}
          >
            Aqui você fará toda gestão do seu sistema de pontos.
          </Text>
        </Flex>
      </Flex>
      <Flex width="100vw" justifyContent="center" alignItems="center" flex={1}>
        <Flex height="100vh" alignItems="center" width={"400px"}>
          <FormControl isRequired>
            <Flex justifyContent="start" alignItems="center">
              <Img src="./pontogo.svg" alt="PontoGo Logo" height={"75px"} />
            </Flex>
            <Heading color={"#330693"} fontFamily={"Poppins"} my={5}>
              Faça login
            </Heading>
            <Flex direction={"column"} gap={3}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Senha</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="md" onClick={handleClick}>
                    {show ? <EyeFilled /> : <EyeInvisibleFilled />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Link to={"/"}>
                <Button
                  variant={"link"}
                  textDecoration={"underline"}
                  fontWeight={"400"}
                  marginBottom={5}
                  color={"#330693"}
                >
                  Esqueci minha senha
                </Button>
              </Link>
              <Button
                bg={"#330693"}
                color={"white"}
                _hover={{ bg: "#330693" }}
                isLoading={loading}
                onClick={submitForm}
              >
                Entrar
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}
