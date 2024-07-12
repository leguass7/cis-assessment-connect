import React, { useEffect, useState } from 'react';

import { Button, FormControl, FormLabel, Input, InputGroup, Select, Stack, useColorModeValue } from '@chakra-ui/react';

import { createPassport } from '~/services/passport';

import { useApiResponse } from '~/providers/AppProvider';

type Props = {
  onSuccess: (success: boolean, submit: boolean) => void;
};

export const FormCreatePassport: React.FC<Props> = ({ onSuccess }) => {
  const [name, setName] = useState('Api');
  const { setPassport } = useApiResponse();
  const [finality, setFinality] = useState(null);
  const [typeReport, setTypeReport] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formBg = useColorModeValue('gray.50', 'gray.700');
  const formHoverBg = useColorModeValue('gray.100', 'gray.600');
  const formFocusBg = useColorModeValue('white', 'gray.600');
  const placeholderColor = useColorModeValue('gray.400', 'gray.300');
  const buttonBg = useColorModeValue('cisBlue', '#4d59fa');
  const buttonHoverBg = useColorModeValue('#4d59fa', 'cisBlue');
  const buttonTextColor = useColorModeValue('white', 'white');
  const textLabelColor = useColorModeValue('gray.600', 'gray.300');

  const typeReportOptions = [
    {
      name: 'Disc + tipos psicológicos + fatores',
      value: 1,
    },
    {
      name: 'Disc',
      value: 2,
    },
    {
      name: 'Inteligências Múltiplas',
      value: 3,
    },
    {
      name: 'MiniMega Assessment',
      value: 4,
    },
  ];
  const finalityOptions = [
    {
      name: 'Pessoal',
      value: 1,
    },
    {
      name: 'Global',
      value: 2,
    },
    {
      name: 'Profissional',
      value: 3,
    },
  ];

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleFinalitySelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFinality(event.target.value);
  };

  const handleTypeReportSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeReport(Number(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await createPassport(name, finality, typeReport);
    setLoading(false);
    setIsSubmitting(true);
    if (response?.success) {
      setIsSuccess(true);
      setPassport(response?.passport);
    } else {
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (onSuccess) {
      onSuccess(isSuccess, isSubmitting);
    }
  }, [isSubmitting, isSuccess, onSuccess]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={8}>
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
          <FormControl isRequired id="finality ">
            <FormLabel color={textLabelColor}>Finalidade do processo</FormLabel>
            <Select
              bg={formBg}
              value={finality}
              borderRadius="lg"
              placeholder="Finalidade do processo"
              onChange={handleFinalitySelectChange}
              _hover={{
                backgroundColor: formHoverBg,
              }}
              _focus={{
                backgroundColor: formFocusBg,
                borderColor: buttonBg,
                boxShadow: `0 0 0 1px ${buttonBg}`,
              }}
            >
              {finalityOptions.map((option, index) => (
                <option key={index} value={option?.value}>
                  {option?.name}
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
              placeholder="Tipo de Relatório"
              onChange={handleTypeReportSelectChange}
              _hover={{
                backgroundColor: formHoverBg,
              }}
              _focus={{
                backgroundColor: formFocusBg,
                borderColor: buttonBg,
                boxShadow: `0 0 0 1px ${buttonBg}`,
              }}
            >
              {typeReportOptions.map((option, index) => (
                <option key={index} value={option?.value}>
                  {option?.name}
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
            Criar
          </Button>
        </Stack>
      </form>
    </>
  );
};
