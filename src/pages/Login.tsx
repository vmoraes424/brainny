/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { FormControl, FormLabel, Flex, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { LOGIN_MUTATION } from "../graphql";

export default function Login() {
  const [email, setEmail] = useState("admin@brainny.cc");
  const [password, setPassword] = useState("adminregister");

  const [doLogin, { error }] = useMutation(LOGIN_MUTATION);

  async function submitForm() {
    if (error) {
      console.log(error);
    }

    try {
      const { data } = await doLogin({ variables: { email, password } });
      const jwt = data.login.jwt;
      console.log(jwt);
      localStorage.setItem("token", jwt);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <ChakraProvider>
      <Flex width="100vw" justifyContent="center" alignItems="center">
        <Flex height="100vh" justifyContent="center" alignItems="center">
          <FormControl isRequired>
            <Flex justifyContent="center" alignItems="center">
              <img
                src={"../logo.webp"}
                width={100}
                height={100}
                alt="Brainny Logo"
                className="mb-5 rounded mx-auto"
              />
            </Flex>
            <Flex direction={"column"} maxW={400} gap={3}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="vinicius@brainny.cc"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button colorScheme="teal" onClick={submitForm}>
                Login
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}