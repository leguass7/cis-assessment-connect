import React, { useEffect, useState } from 'react';

import { Box, Button, FormControl, FormLabel, Input, InputGroup, Stack, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { CisAssessmentClient } from '~/services/CisAssessmentClient';

import { useApiResponse } from '~/providers/ResponseApiProvider';

type Props = {
  onChange: (load: boolean) => void;
};

export const FormRefreshToken: React.FC<Props> = ({ onChange }) => {
  const [load, setLoad] = useState(false);
  const [refreshToken, setRefreshToken] = useState('');
  const { apiResponse } = useApiResponse();
  const { push } = useRouter();

  const responseToken = apiResponse?.refreshToken;

  const formBg = useColorModeValue('gray.50', 'gray.700');
  const formHoverBg = useColorModeValue('gray.100', 'gray.600');
  const formFocusBg = useColorModeValue('white', 'gray.600');
  const placeholderColor = useColorModeValue('gray.400', 'gray.300');
  const buttonBg = useColorModeValue('#212ffc', '#4d59fa');
  const buttonHoverBg = useColorModeValue('#4d59fa', '#212ffc');
  const buttonTextColor = useColorModeValue('white', 'white');
  const boxBg = useColorModeValue('white', 'gray.800');
  const textLabelColor = useColorModeValue('gray.600', 'gray.300');

  const handleRefreshTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRefreshToken(event.target.value);
  };

  const client = new CisAssessmentClient({ development: true });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);
    const response = await client.requestRefreshToken(responseToken);

    setLoad(false);

    if (response?.success) {
      setRefreshToken(response?.refreshToken);
      push(`/login/${'success'}`);
    } else {
      push(`/login/${'error'}`);
    }
  };

  useEffect(() => {
    if (onChange) onChange(load);
  }, [load, onChange]);

  return (
    <Box
      marginY={4}
      p={{ base: 2, md: 8 }}
      borderWidth={{ base: 0, md: 1 }}
      boxShadow={{ base: 0, md: 'lg' }}
      borderRadius={{ base: 0, md: 'xl' }}
      bg={{ base: 'transparent', md: boxBg }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl isRequired id="refreshToken">
            <FormLabel color={textLabelColor}>RefreshToken</FormLabel>
            <InputGroup>
              <Input
                type="text"
                bg={formBg}
                borderRadius="lg"
                value={refreshToken}
                onChange={handleRefreshTokenChange}
                placeholder="Digite seu refreshToken"
                _placeholder={{ color: placeholderColor }}
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
          <Button
            mt={4}
            size="md"
            type="submit"
            bg={buttonBg}
            fontSize="md"
            isLoading={load}
            color={buttonTextColor}
            _hover={{
              bg: buttonHoverBg,
            }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
