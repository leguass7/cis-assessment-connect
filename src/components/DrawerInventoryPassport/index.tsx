import React, { useState } from 'react';
import { FiCheckCircle, FiCircle, FiSearch } from 'react-icons/fi';

import { Box, Divider, Flex, Icon, Input, InputGroup, InputLeftElement, Text, useColorModeValue } from '@chakra-ui/react';

import type { IPassport } from '~/services/passport/passport.dto';

import { DrawerComponent } from './DrawerComponent';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  passports: IPassport[];
  onChange: (passportId: number) => void;
};

export const DrawerInventoryPassport: React.FC<Props> = ({ isOpen, onChange, onClose, passports }) => {
  const [selectedPassportId, setSelectedPassportId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePassportSelect = (passportId: number) => {
    setSelectedPassportId(passportId);
    onChange(passportId);
  };

  const filteredPassports = passports.filter(passport => passport.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const searchBarBg = useColorModeValue('white', 'gray.800');
  const inputPlaceholderColor = useColorModeValue('gray.400', 'gray.500');
  const iconColor = useColorModeValue('gray.500', 'gray.400');
  const borderColorByDarkMode = useColorModeValue('gray.200', 'gray.700');

  return (
    <DrawerComponent isOpen={isOpen} onClose={onClose}>
      <Box height="100%" position="relative">
        <Box p={4} top={0} left={0} right={0} zIndex={1} boxShadow="sm" position="fixed" bg={searchBarBg}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color={iconColor} />
            </InputLeftElement>
            <Input
              size="md"
              bg={searchBarBg}
              paddingLeft={10}
              borderRadius="lg"
              value={searchTerm}
              placeholder="Buscar passaporte..."
              onChange={e => setSearchTerm(e.target.value)}
              _placeholder={{ color: inputPlaceholderColor }}
              _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
            />
          </InputGroup>
        </Box>

        <Box mt={10} paddingX={8} paddingY={4} background={searchBarBg}>
          {filteredPassports.map((passport, index) => {
            return (
              <>
                <Box cursor="pointer" key={passport.id} onClick={() => handlePassportSelect(passport?.id)}>
                  <Flex py={2} align="center">
                    <Icon
                      mr={4}
                      boxSize={6}
                      as={selectedPassportId === passport.id ? FiCheckCircle : FiCircle}
                      color={selectedPassportId === passport.id ? 'green.500' : 'gray.500'}
                    />
                    <Box>
                      <Text fontWeight="bold">{passport.name}</Text>
                      <Text color="gray.500">ID: {passport.id}</Text>
                    </Box>
                  </Flex>
                  {index < filteredPassports.length - 1 && <Divider borderColor={borderColorByDarkMode} />}
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </DrawerComponent>
  );
};
