import { Box, FormControl, FormLabel, Input, InputGroup, Stack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  onChange?: (load: boolean) => void;
};

export const FormClientCredentials: React.FC<Props> = ({ onChange }) => {
  const [load, setLoad] = useState(false);
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
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
          <FormControl id="clientId" isReadOnly>
            <FormLabel color={textLabelColor}>Client ID</FormLabel>
            <InputGroup>
              <Input
                value={clientId}
                placeholder="Clique para obter o Client ID"
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
          <FormControl id="clientSecret" isReadOnly>
            <FormLabel color={textLabelColor}>Client Secret</FormLabel>
            <InputGroup>
              <Input
                value={clientSecret}
                placeholder="Clique para obter o Client Secret"
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
