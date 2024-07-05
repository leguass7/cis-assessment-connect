import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaUserAstronaut, FaLock } from "react-icons/fa";
import { authAutentication } from "~/services/authLogin";

type FormLoginProps = {
  onChange: (load: boolean) => void;
};

export const FormLogin: React.FC<FormLoginProps> = ({ onChange }) => {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authResponse, setAuthResponse] = useState<any>({});
  const { push } = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <Stack spacing={6}>
          <FormControl id="email" isRequired>
            <FormLabel color={"#4b4b4b"}>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUserAstronaut fontSize={22} color="#aaa7a7" />
              </InputLeftElement>
              <Input
                value={email}
                onChange={handleEmailChange}
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
            </InputGroup>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel color={"#4b4b4b"}>Senha</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaLock color="#aaa7a7" />
              </InputLeftElement>
              <Input
                value={password}
                onChange={handlePasswordChange}
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
            </InputGroup>
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
