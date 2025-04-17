import React, { useCallback, useEffect, useState } from 'react';
import { FiCheckCircle, FiCircle, FiSearch } from 'react-icons/fi';

import { Box, Divider, Flex, Icon, Input, InputGroup, InputLeftElement, Text, useColorModeValue } from '@chakra-ui/react';

import { getPaginatePassport } from '~/services/passport';
import type { IPassport } from '~/services/passport/passport.dto';

import { DrawerComponent } from './DrawerComponent';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (passportId: number) => void;
};

export const DrawerInventoryPassport: React.FC<Props> = ({ isOpen, onChange, onClose }) => {
  const [selectedPassportId, setSelectedPassportId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [, setShowSkeleton] = useState(false);
  const [listPassports, setListPassports] = useState<IPassport[]>([]);

  const filteredPassports = listPassports.filter(passport => passport.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const paginatePassports = useCallback(async () => {
    setShowSkeleton(true);
    const response = await getPaginatePassport({ page: 1, size: 20 });
    setShowSkeleton(false);
    if (response?.success) {
      setListPassports(response?.data);
    }
  }, []);

  useEffect(() => {
    paginatePassports();
  }, [paginatePassports]);

  const handlePassportSelect = (passportId: number) => {
    setSelectedPassportId(passportId);
    if (onChange) onChange(passportId);
  };

  const searchBarBg = useColorModeValue('white', 'gray.800');
  const inputPlaceholderColor = useColorModeValue('gray.400', 'gray.500');
  const iconColor = useColorModeValue('gray.500', 'gray.400');
  const borderColorByDarkMode = useColorModeValue('gray.200', 'gray.700');

  return (
    <DrawerComponent isOpen={isOpen} onClose={onClose}>
      <Box height="100%" position="relative">
        <Box
          p={4}
          top={0}
          left={0}
          right={0}
          zIndex={1}
          boxShadow="sm"
          position="fixed"
          bg={searchBarBg}
          paddingY={{ base: 2, md: 6 }}
          paddingX={{ base: 4, md: 16 }}
        >
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

        <Box paddingX={8} paddingY={1} background={searchBarBg} mt={{ base: 10, md: 10, xl: 16 }}>
          {filteredPassports.length > 0 ? (
            <>
              {filteredPassports?.map((passport, index) => {
                const createDate = new Date(passport?.createdAt);
                const formatedDate = createDate.toLocaleDateString('pt-BR');
                return (
                  <>
                    <Box cursor="pointer" key={passport.id} my={{ base: 0, md: 2 }} onClick={() => handlePassportSelect(passport?.id)}>
                      <Flex py={2} align="center">
                        <Icon
                          mr={4}
                          boxSize={6}
                          as={selectedPassportId === passport.id ? FiCheckCircle : FiCircle}
                          color={selectedPassportId === passport.id ? 'green.500' : 'gray.500'}
                        />
                        <Box>
                          <Text fontWeight="bold">{passport?.name}</Text>
                          <Text fontSize={'xs'} color="gray.500">
                            Criado em: {formatedDate}
                          </Text>
                        </Box>
                      </Flex>
                      {index < filteredPassports.length - 1 && <Divider borderColor={borderColorByDarkMode} />}
                    </Box>
                  </>
                );
              })}
            </>
          ) : null}
        </Box>
      </Box>
    </DrawerComponent>
  );
};
