/* eslint-disable @typescript-eslint/no-unused-vars */
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { onError } from "@apollo/client/link/error";
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
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  const [doLogin] = useMutation(LOGIN_MUTATION);

  const userInfo = {
    jwt: "",
    role: "",
    userId: "",
  };

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  async function loginHandler() {
    try {
      const { data } = await doLogin({ variables: { email, password } });
      const jwt = data.login.jwt;
      const role = data.login.user.role.name;
      const userId = data.login.user.id;
      userInfo.jwt = jwt;
      userInfo.role = role;
      userInfo.userId = userId;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setError("");
      return userInfo;
    } catch (error) {
      setLoading(false);
      console.error("Erro ao fazer login:", error);
      console.log(errorLink);
    }
  }

  async function submitForm() {
    try {
      setLoading(true);
      const result = await loginHandler();

      if (result && result.role === "admin") {
        navigate("/dashboard");
      } else if (result && result.role === "user") {
        navigate("/meus-registros");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setLoading(false);
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
          <Text
            color={"var(--principal-color)"}
            fontSize={40}
            fontWeight={"700"}
          >
            Bem vindo ao PontoGo
          </Text>
          <Text
            fontSize={"25px"}
            fontWeight={"400"}
            textAlign={"center"}
            color={"var(--principal-color)"}
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
            <Heading
              color={"var(--principal-color)"}
              fontFamily={"Poppins"}
              my={5}
            >
              Faça login
            </Heading>
            <Flex direction={"column"} gap={3}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Senha</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="***************"
                  value={password}
                  required
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
                  color={"var(--principal-color)"}
                >
                  Esqueci minha senha
                </Button>
              </Link>
              <Button
                bg={"var(--principal-color)"}
                color={"white"}
                _hover={{ bg: "var(--principal-color)" }}
                isLoading={loading}
                onClick={submitForm}
              >
                Entrar
              </Button>
              {error && <div style={{ color: "red" }}>{error}</div>}
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}
