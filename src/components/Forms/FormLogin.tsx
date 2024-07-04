import { Box, Button, FormControl, FormLabel, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { authAutentication } from "~/services/authLogin";

type FormLoginProps = {
  onChange: (load: boolean) => void;
};

export const FormLogin: React.FC<FormLoginProps> = ({ onChange }) => {
  const [load, setLoad] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authResponse, setAuthResponse] = React.useState({} as any);
  const { push } = useRouter();

  const handlerChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlerChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);
    const response = await authAutentication(email, password);

    setLoad(false);

    if (response.success) {
      setAuthResponse(response);
      push(`/login/${"success"}`);
    } else {
      push(`/login/${"error"}`);
    }
  };

  const formBg = useColorModeValue("gray.50", "gray.700");
  const formHoverBg = useColorModeValue("gray.100", "gray.600");
  const formFocusBg = useColorModeValue("white", "gray.600");
  const placeholderColor = useColorModeValue("gray.400", "gray.300");
  const buttonBg = useColorModeValue("#212ffc", "#4d59fa");
  const buttonHoverBg = useColorModeValue("#4d59fa", "#212ffc");
  const buttonTextColor = useColorModeValue("white", "white");
  const boxBg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    if (onChange) onChange(load);
  }, [load]);

  return (
    <Box
      mt={12}
      p={{ base: 2, md: 8 }}
      borderWidth={{ base: 0, md: 1 }}
      borderRadius={{ base: 0, md: "xl" }}
      boxShadow={{ base: 0, md: "lg" }}
      bg={{ base: "transparent", md: boxBg }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              onChange={handlerChangeEmail}
              type="email"
              placeholder="Digite seu email"
              borderRadius="lg"
              bg={formBg}
              _placeholder={{ color: placeholderColor }}
              _focus={{
                borderColor: buttonBg,
                boxShadow: `0 0 0 1px ${buttonBg}`,
                backgroundColor: formFocusBg,
              }}
              _hover={{
                backgroundColor: formHoverBg,
              }}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              value={password}
              onChange={handlerChangePassword}
              type="password"
              placeholder="Digite sua senha"
              borderRadius="lg"
              bg={formBg}
              _placeholder={{ color: placeholderColor }}
              _focus={{
                borderColor: buttonBg,
                boxShadow: `0 0 0 1px ${buttonBg}`,
                backgroundColor: formFocusBg,
              }}
              _hover={{
                backgroundColor: formHoverBg,
              }}
            />
          </FormControl>
          <Button
            mt={4}
            _hover={{
              bg: buttonHoverBg,
            }}
            type="submit"
            color={buttonTextColor}
            bg={buttonBg}
            size="md"
            fontSize="md"
          >
            Entrar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
