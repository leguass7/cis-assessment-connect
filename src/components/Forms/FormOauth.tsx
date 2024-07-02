import { Box, Button, Stack, useToast } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import router, { useRouter } from "next/router";
import React from "react";

export const FormOauth = () => {
  const handleGoogleLogin = () => {
    const router = useRouter();
    const toast = useToast();

    toast({
      title: "Autenticação pelo Google bem-sucedida.",
      description: "Você entrou com sucesso!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    router.push("/dashboard");
  };

  const handleLinkedinLogin = () => {
    const router = useRouter();
    const toast = useToast();

    toast({
      title: "Autenticação pelo LinkedIn bem-sucedida.",
      description: "Você entrou com sucesso!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    router.push("/dashboard");
  };

  return (
    <Box width="100%" maxWidth="300px" mx="auto" mt="8">
      <Stack spacing={6}>
        <Button leftIcon={<FaGoogle />} colorScheme="red" variant="solid" onClick={handleGoogleLogin}>
          Entrar com Google
        </Button>
        <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid" onClick={handleLinkedinLogin}>
          Entrar com LinkedIn
        </Button>
        <Button
          background={"#212ffc"}
          color={"white"}
          _hover={{
            bgColor: "#4d59fa",
          }}
          variant="solid"
          onClick={handleLinkedinLogin}
        >
          Cis Assessment
        </Button>
      </Stack>
    </Box>
  );
};
