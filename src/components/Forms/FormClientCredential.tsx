import React, { useEffect, useState } from "react";

import { Box, FormControl, FormLabel, Input, InputGroup, Stack, useColorModeValue } from "@chakra-ui/react";

type Props = {
  onChange?: (load: boolean) => void;
};

export const FormClientCredentials: React.FC<Props> = ({ onChange }) => {
  const [load, setLoad] = useState(false);
  const [clientId] = useState("");
  const [clientSecret] = useState("");

  const formBg = useColorModeValue("gray.50", "gray.700");
  const formHoverBg = useColorModeValue("gray.100", "gray.600");
  const formFocusBg = useColorModeValue("white", "gray.600");
  const placeholderColor = useColorModeValue("gray.400", "gray.300");
  const buttonBg = useColorModeValue("#212ffc", "#4d59fa");
  const boxBg = useColorModeValue("white", "gray.800");
  const textLabelColor = useColorModeValue("gray.600", "gray.300");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);

    // try {
    //   const response = await getClientCredentials();
    //   setLoad(false);
    //   if (response.success) {
    //     setClientId(response.client_id);
    //     setClientSecret(response.client_secret);
    //   } else {
    //     alert("Erro ao obter credenciais do cliente");
    //   }
    // } catch (error) {
    //   setLoad(false);
    //   console.error("Erro ao obter credenciais do cliente:", error);
    // }
  };

  useEffect(() => {
    if (onChange) onChange(load);
  }, [load, onChange]);

  return (
    <Box
      marginY={4}
      p={{ base: 2, md: 8 }}
      borderWidth={{ base: 0, md: 1 }}
      boxShadow={{ base: 0, md: "lg" }}
      borderRadius={{ base: 0, md: "xl" }}
      bg={{ base: "transparent", md: boxBg }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl isReadOnly id="clientId">
            <FormLabel color={textLabelColor}>Client ID</FormLabel>
            <InputGroup>
              <Input
                bg={formBg}
                value={clientId}
                borderRadius="lg"
                _placeholder={{ color: placeholderColor }}
                placeholder="Clique para obter o Client ID"
                _hover={{
                  backgroundColor: formHoverBg,
                }}
                _focus={{
                  backgroundColor: formFocusBg,
                  borderColor: buttonBg,
                  boxShadow: `0 0 0 1px ${buttonBg}`,
                }}
              />
            </InputGroup>
          </FormControl>
          <FormControl isReadOnly id="clientSecret">
            <FormLabel color={textLabelColor}>Client Secret</FormLabel>
            <InputGroup>
              <Input
                bg={formBg}
                borderRadius="lg"
                value={clientSecret}
                _placeholder={{ color: placeholderColor }}
                placeholder="Clique para obter o Client Secret"
                _hover={{
                  backgroundColor: formHoverBg,
                }}
                _focus={{
                  backgroundColor: formFocusBg,
                  borderColor: buttonBg,
                  boxShadow: `0 0 0 1px ${buttonBg}`,
                }}
              />
            </InputGroup>
          </FormControl>
          {/* <Button
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
            Obter Credenciais
          </Button> */}
        </Stack>
      </form>
    </Box>
  );
};
