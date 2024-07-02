import { Box, Button, FormControl, FormLabel, Input, Link, Stack, Toast, useToast } from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import React from "react";

export const FormLogin = () => {
  const handleLogin = (event: React.FormEvent) => {
    const router = useRouter();
    const toast = useToast();

    event.preventDefault();
    Toast({
      title: "Login bem-sucedido.",
      description: "Você entrou com sucesso!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Digite seu email"
            borderRadius="lg"
            bg="gray.50"
            _placeholder={{ color: "gray.400" }}
            _focus={{
              borderColor: "#212ffc",
              boxShadow: "0 0 0 1px #212ffc",
              backgroundColor: "white",
            }}
            _hover={{
              backgroundColor: "gray.100",
            }}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            placeholder="Digite sua senha"
            borderRadius="lg"
            bg="gray.50"
            _placeholder={{ color: "gray.400" }}
            _focus={{
              borderColor: "#212ffc",
              boxShadow: "0 0 0 1px #212ffc",
              backgroundColor: "white",
            }}
            _hover={{
              backgroundColor: "gray.100",
            }}
          />
        </FormControl>
        <Button
          mt={4}
          _hover={{
            bgColor: "#4d59fa",
          }}
          type="submit"
          textColor="white"
          bgColor="#212ffc"
          size="md"
          fontSize="md"
        >
          Entrar
        </Button>
      </Stack>
    </form>
  );
};
