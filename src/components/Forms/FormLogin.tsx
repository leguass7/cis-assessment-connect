import { Button, FormControl, FormLabel, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type FormLoginProps = {
  onLogin: () => void;
};

export const FormLogin: React.FC<FormLoginProps> = ({ onLogin }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin();
  };

  const formBg = useColorModeValue("gray.50", "gray.700");
  const formHoverBg = useColorModeValue("gray.100", "gray.600");
  const formFocusBg = useColorModeValue("white", "gray.600");
  const placeholderColor = useColorModeValue("gray.400", "gray.300");
  const buttonBg = useColorModeValue("#212ffc", "#4d59fa");
  const buttonHoverBg = useColorModeValue("#4d59fa", "#212ffc");
  const buttonTextColor = useColorModeValue("white", "white");

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
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
  );
};

