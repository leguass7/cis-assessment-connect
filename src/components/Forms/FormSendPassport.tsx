import React, { useEffect, useState } from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  Select,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { sendInventoryPassport } from '~/services/inventory';

import { useApiResponse } from '~/providers/AppProvider';

type Props = {
  onSuccess: (success: boolean) => void;
};

export const FormSendPassport: React.FC<Props> = ({ onSuccess }) => {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [passportId, setPassportId] = useState(null);
  const [language, setLanguage] = useState('pt-br');
  const { passport } = useApiResponse();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formBg = useColorModeValue('gray.50', 'gray.700');
  const formHoverBg = useColorModeValue('gray.100', 'gray.600');
  const formFocusBg = useColorModeValue('white', 'gray.600');
  const placeholderColor = useColorModeValue('gray.400', 'gray.300');
  const buttonBg = useColorModeValue('cisBlue', '#4d59fa');
  const buttonHoverBg = useColorModeValue('#4d59fa', 'cisBlue');
  const buttonTextColor = useColorModeValue('white', 'white');
  const textLabelColor = useColorModeValue('gray.800', 'gray.300');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handlerPassportIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassportId(Number(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);
    const hasPassportId = passport?.id ? passport?.id : passportId;
    const response = await sendInventoryPassport(hasPassportId, { email, language, name });
    setLoad(false);
    setIsSubmitting(true);
    if (response?.success) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (onSuccess) {
      onSuccess(isSuccess);
    }
  }, [isSuccess, onSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={6}>
        {!isSuccess && isSubmitting ? (
          <Alert rounded="sm" status="error" variant={'left-accent'}>
            <AlertIcon />
            <AlertDescription>Algo deu errado, tente novamente!</AlertDescription>
          </Alert>
        ) : null}
        <FormControl id="email" isRequired>
          <FormLabel color={textLabelColor}>Email</FormLabel>
          <InputGroup>
            <Input
              bg={formBg}
              type="email"
              value={email}
              borderRadius="lg"
              onChange={handleEmailChange}
              placeholder="Digite seu email"
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
        <FormControl id="name" isRequired>
          <FormLabel color={textLabelColor}>Nome</FormLabel>
          <InputGroup>
            <Input
              bg={formBg}
              type="text"
              value={name}
              borderRadius="lg"
              onChange={handleNameChange}
              placeholder="Digite seu nome"
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
        <Grid gap={6} templateColumns="1fr 1fr">
          <FormControl isRequired id="language">
            <FormLabel color={textLabelColor}>Idioma</FormLabel>
            <Select
              bg={formBg}
              value={language}
              borderRadius="lg"
              onChange={handleLanguageChange}
              placeholder="Selecione o idioma"
              _hover={{
                backgroundColor: formHoverBg,
              }}
              _focus={{
                backgroundColor: formFocusBg,
                borderColor: buttonBg,
                boxShadow: `0 0 0 1px ${buttonBg}`,
              }}
            >
              <option value="pt-br">Português (Brasil)</option>
              <option value="en">Inglês</option>
              <option value="es">Espanhol</option>
            </Select>
          </FormControl>

          <FormControl isRequired id="passportNumber">
            <FormLabel color={textLabelColor}>Passaporte</FormLabel>
            <Input
              bg={formBg}
              type="number"
              borderRadius="lg"
              value={passportId}
              placeholder="Passaporte"
              onChange={handlerPassportIdChange}
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
          </FormControl>
        </Grid>
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
  );
};
