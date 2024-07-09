import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack, useColorModeValue, InputGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  onChange: (load: boolean) => void;
};

export const FormRefreshToken: React.FC<Props> = ({ onChange }) => {
  const [load, setLoad] = useState(false);
  const [refreshToken, setRefreshToken] = useState("");
  const [, setAuthResponse] = useState<any>({});
  const { push } = useRouter();

  const formBg = useColorModeValue("gray.50", "gray.700");
  const formHoverBg = useColorModeValue("gray.100", "gray.600");
  const formFocusBg = useColorModeValue("white", "gray.600");
  const placeholderColor = useColorModeValue("gray.400", "gray.300");
  const buttonBg = useColorModeValue("#212ffc", "#4d59fa");
  const buttonHoverBg = useColorModeValue("#4d59fa", "#212ffc");
  const buttonTextColor = useColorModeValue("white", "white");
  const boxBg = useColorModeValue("white", "gray.800");
  const textLabelColor = useColorModeValue("gray.600", "gray.300");

  const handleRefreshTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRefreshToken(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);

    if (!refreshToken) {
      alert("Por favor, preencha o campo de token.");
      setLoad(false);
      return;
    }

    // authRefreshToken(refreshToken)
    //   .then((response) => {
    //     setLoad(false);
    //     if (response.success) {
    //       setAuthResponse(response);
    //       push(`/login/success`);
    //     } else {
    //       push(`/login/error`);
    //     }
    //   })
    //   .catch((error) => {
    //     setLoad(false);
    //     console.error("Erro ao autenticar:", error);
    //   });
  };

  useEffect(() => {
    if (onChange) onChange(load);
  }, [load]);

  return (
    <Box
      marginY={4}
      p={{ base: 2, md: 8 }}
      borderWidth={{ base: 0, md: 1 }}
      borderRadius={{ base: 0, md: "xl" }}
      boxShadow={{ base: 0, md: "lg" }}
      bg={{ base: "transparent", md: boxBg }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl id="refreshToken" isRequired>
            <FormLabel color={textLabelColor}>Token</FormLabel>
            <InputGroup>
              <Input
                value={refreshToken}
                onChange={handleRefreshTokenChange}
                type="text"
                placeholder="Digite seu token"
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
            isLoading={load}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
