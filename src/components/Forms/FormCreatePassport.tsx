import React, { useEffect, useState } from 'react';

import { Box, Button, FormControl, FormLabel, Input, InputGroup, Select, Stack, useColorModeValue } from '@chakra-ui/react';

export const FormCreatePassport: React.FC = () => {
  const [name, setName] = useState('Api');
  const [processObjective, setSelect1] = useState('');
  const [typeReport, setTypeReport] = useState('Disc + tipos psicológicos + fatores');
  const [loading, setLoading] = useState(false);
  const [options1, setOptions1] = useState<string[]>([]);
  const [options2, setOptions2] = useState<string[]>([]);

  const formBg = useColorModeValue('gray.50', 'gray.700');
  const formHoverBg = useColorModeValue('gray.100', 'gray.600');
  const formFocusBg = useColorModeValue('white', 'gray.600');
  const placeholderColor = useColorModeValue('gray.400', 'gray.300');
  const buttonBg = useColorModeValue('#212ffc', '#4d59fa');
  const buttonHoverBg = useColorModeValue('#4d59fa', '#212ffc');
  const buttonTextColor = useColorModeValue('white', 'white');
  const boxBg = useColorModeValue('white', 'gray.800');
  const textLabelColor = useColorModeValue('gray.600', 'gray.300');

  useEffect(() => {
    const fetchOptions = async () => {
      const response1 = await new Promise<string[]>(resolve => setTimeout(() => resolve(['Pessoal', 'Global', 'Profissional']), 1000));
      const response2 = await new Promise<string[]>(resolve =>
        setTimeout(() => resolve(['Disc + tipos psicológicos + fatores', 'Opção 2.2', 'Opção 2.3']), 1000),
      );
      setOptions1(response1);
      setOptions2(response2);
    };

    fetchOptions();
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSelect1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect1(event.target.value);
  };

  const handleSelect2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeReport(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Nome: ${name}\nSelect 1: ${processObjective}\nSelect 2: ${typeReport}`);
    }, 1000);
  };

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
          <FormControl id="name" isRequired>
            <FormLabel color={textLabelColor}>Nome</FormLabel>
            <InputGroup>
              <Input
                isReadOnly
                bg={formBg}
                type="text"
                value={name}
                disabled={true}
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
          <FormControl isRequired id="processObjective ">
            <FormLabel color={textLabelColor}>Finalidade do processo</FormLabel>
            <Select
              bg={formBg}
              borderRadius="lg"
              value={processObjective}
              onChange={handleSelect1Change}
              placeholder="Finalidade do processo"
              _hover={{
                backgroundColor: formHoverBg,
              }}
              _focus={{
                backgroundColor: formFocusBg,
                borderColor: buttonBg,
                boxShadow: `0 0 0 1px ${buttonBg}`,
              }}
            >
              {options1.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired id="typeReport">
            <FormLabel color={textLabelColor}>Tipo de Relatório</FormLabel>
            <Select
              isReadOnly
              bg={formBg}
              opacity={0.6}
              disabled={true}
              borderRadius="lg"
              value={typeReport}
              cursor="not-allowed"
              onChange={handleSelect2Change}
              placeholder="Tipo de Relatório"
              _hover={{
                backgroundColor: formHoverBg,
              }}
              _focus={{
                backgroundColor: formFocusBg,
                borderColor: buttonBg,
                boxShadow: `0 0 0 1px ${buttonBg}`,
              }}
            >
              {options2.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            mt={4}
            size="md"
            type="submit"
            bg={buttonBg}
            fontSize="md"
            isLoading={loading}
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
