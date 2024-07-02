import React from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, Link, useToast } from "@chakra-ui/react";
import { PublicLayout } from "~/components/PublicLayout";
import { useRouter } from "next/router";

type Props = {};

const Login: React.FC<Props> = () => {
  const router = useRouter();
  const toast = useToast();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Login bem-sucedido.",
      description: "Você entrou com sucesso!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    router.push("/dashboard");
  };

  return (
    <PublicLayout>
      <Container maxW="sm" mt={10}>
        <Box
          p={{ base: 2, md: 8 }}
          borderWidth={{ base: 0, md: 1 }}
          borderRadius={{ base: 0, md: "xl" }}
          boxShadow={{ base: 0, md: "lg" }}
          bg={{ base: "transparent", md: "white" }}
        >
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
              <Box textAlign="center">
                <Link color="#212ffc" onClick={() => router.push("/forgot-password")}>
                  Esqueci minha senha
                </Link>
              </Box>
            </Stack>
          </form>
        </Box>
      </Container>
    </PublicLayout>
  );
};

export default Login;
