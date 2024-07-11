import React from 'react';

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { CodeHighlight } from '~/components/CodeHighlight';
import { noResponseTypeResponse, passwordGrantPayload, refreshTokenGrantPayload, refreshTokenResponse } from '~/components/CodeHighlight/constants';

export const AccordionComponent: React.FC = () => {
  const bgColor = useColorModeValue('white', '#2c2c2c');
  const borderColor = useColorModeValue('#dbdbdb', '#525252');
  const panelColor = useColorModeValue('#e9e9e9', '#2c2c2c');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Accordion
        allowToggle
        width="100%"
        borderWidth={1}
        borderRadius="2xl"
        transition="easeInOut"
        backgroundColor={bgColor}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
      >
        <AccordionItem border="none" borderBottom={`1px solid ${borderColor}`}>
          <AccordionButton padding="20px">
            <Box flex="1" textAlign="left">
              <Text as="b" fontSize="lg" color={textColor}>
                Concessão por Senha
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={2} backgroundColor={panelColor}>
            <Flex alignItems="center" flexDirection="column" justifyContent="center">
              <CodeHighlight codeString={passwordGrantPayload} />
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none" borderBottom={`1px solid ${borderColor}`}>
          <AccordionButton padding="20px">
            <Box flex="1" textAlign="left">
              <Text as="b" fontSize="lg" color={textColor}>
                Concessão por Token de Atualização
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} backgroundColor={panelColor}>
            <Flex alignItems="center" flexDirection="column" justifyContent="center">
              <CodeHighlight codeString={refreshTokenGrantPayload} />
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none" borderBottom={`1px solid ${borderColor}`}>
          <AccordionButton padding="20px">
            <Box flex="1" textAlign="left">
              <Text as="b" fontSize="lg" color={textColor}>
                Resposta com responseType: refreshToken
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} backgroundColor={panelColor}>
            <Flex alignItems="center" flexDirection="column" justifyContent="center">
              <CodeHighlight codeString={refreshTokenResponse} />
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none" borderBottom={`1px solid ${borderColor}`}>
          <AccordionButton padding="20px">
            <Box flex="1" textAlign="left">
              <Text as="b" fontSize="lg" color={textColor}>
                Resposta sem responseType: refreshToken
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} backgroundColor={panelColor}>
            <Flex alignItems="center" flexDirection="column" justifyContent="center">
              <CodeHighlight codeString={noResponseTypeResponse} />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
