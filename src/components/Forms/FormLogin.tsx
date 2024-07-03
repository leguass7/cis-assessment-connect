import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";

type FormLoginProps = {
  onLogin: () => void;
};

export const FormLogin: React.FC<FormLoginProps> = ({ onLogin }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
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
