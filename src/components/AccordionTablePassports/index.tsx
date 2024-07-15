import type { FC } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';

import type { PreparedPassport } from '~/pages/router-api';

type AccordionTableProps = {
  accordionData: PreparedPassport[];
};

export const AccordionTablePassports: FC<AccordionTableProps> = ({ accordionData }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.800');
  const textColor = useColorModeValue('black', 'gray.300');
  const headerBgColor = useColorModeValue('gray.50', 'gray.700');
  const rowBgColor = useColorModeValue('gray.50', 'gray.600');
  const rowAltBgColor = useColorModeValue('white', 'gray.700');
  const boxBgColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box>
      <Accordion
        allowToggle
        width="100%"
        borderWidth={1}
        borderRadius="xl"
        defaultIndex={[0]}
        transition="easeInOut"
        backgroundColor={bgColor}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
      >
        <AccordionItem border="none" borderBottom={`1px solid ${borderColor}`}>
          <AccordionButton padding="20px" width={'full'}>
            <Box flex="1" textAlign="left">
              <Text as="b" fontSize="lg" color={textColor}>
                Lista de Passaportes
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant="simple">
              <Thead backgroundColor={headerBgColor}>
                <Tr>
                  <Th fontSize="xs" color={textColor}>
                    Nome
                  </Th>
                  <Th fontSize="xs" color={textColor}>
                    Criado por
                  </Th>
                  <Th fontSize="xs" color={textColor}>
                    Finalidade
                  </Th>
                  <Th fontSize="xs" color={textColor}>
                    Privado
                  </Th>
                  <Th fontSize="xs" color={textColor}>
                    Download
                  </Th>
                  <Th fontSize="xs" color={textColor}>
                    Total
                  </Th>
                  <Th fontSize="xs" color={textColor}>
                    Respondidos
                  </Th>
                  <Th fontSize="xs" color={textColor}>
                    Pendentes
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {accordionData.map((data, index) => (
                  <Tr key={index} bg={index % 2 === 0 ? rowBgColor : rowAltBgColor}>
                    <Td fontSize="xs" color={textColor}>
                      {data.name}
                    </Td>
                    <Td fontSize="xs" color={textColor}>
                      {data?.parent?.name}
                    </Td>
                    <Td fontSize="xs" color={textColor}>
                      {data.occupationArea?.name}
                    </Td>
                    <Td fontSize="xs" color={textColor}>
                      {data.isPrivate ? 'Privado' : 'Público'}
                    </Td>
                    <Td fontSize="xs" color={textColor}>
                      {data.canDownloadReport ? 'Sim' : 'Não'}
                    </Td>
                    <Td fontSize="xs" textAlign="center">
                      <Box
                        width="30px"
                        height="30px"
                        color={textColor}
                        borderRadius="full"
                        alignItems="center"
                        display="inline-flex"
                        justifyContent="center"
                        backgroundColor={boxBgColor}
                      >
                        {data.countInventory}
                      </Box>
                    </Td>
                    <Td fontSize="xs" textAlign="center">
                      <Box
                        width="30px"
                        height="30px"
                        color={textColor}
                        borderRadius="full"
                        alignItems="center"
                        display="inline-flex"
                        justifyContent="center"
                        backgroundColor={boxBgColor}
                      >
                        {data.answered}
                      </Box>
                    </Td>
                    <Td fontSize="xs" textAlign="center">
                      <Box
                        width="30px"
                        height="30px"
                        color={textColor}
                        borderRadius="full"
                        alignItems="center"
                        display="inline-flex"
                        justifyContent="center"
                        backgroundColor={boxBgColor}
                      >
                        {data.pending}
                      </Box>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
