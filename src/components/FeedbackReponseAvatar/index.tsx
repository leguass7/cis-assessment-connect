import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

import { Box, Flex, IconButton, Image, Text, Tooltip, useClipboard, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useApiResponse } from '~/providers/ResponseApiProvider';

import avatarSuccess from '../../../public/imgs/astro-cis.png';
import avatarError from '../../../public/imgs/astro401.png';
import { limitString } from '../../helpers/string';
import { AssessmentBtn } from '../AssessmentBtn/indext';

type Props = {
  status?: boolean;
};

export const FeedbackReponseAvatar: React.FC<Props> = ({ status }) => {
  const { apiResponse } = useApiResponse();
  const [showTooltip, setShowTooltip] = useState(false);
  const router = useRouter();

  const mainTextColor = useColorModeValue('#3b3b3b', 'gray.200');
  const successColor = useColorModeValue('green.400', 'green.300');
  const errorColor = useColorModeValue('red.400', 'red.300');
  const responseTokenRefresh = apiResponse?.refreshToken;
  const responseTokenAccess = apiResponse?.accessToken;

  const { onCopy } = useClipboard(responseTokenRefresh || '');

  const handleCopyClick = () => {
    onCopy();
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };
  const hanldeClickRefreshAccess = () => {
    router.push({
      pathname: '/login',
      query: { accordion: 1 },
    });
  };

  return (
    <>
      <Box width={'100%'} data-aos="zoom-in">
        <Box display="flex" flexDirection="column">
          <Text as="b" fontSize="6xl" lineHeight={1.2} textColor={status ? successColor : errorColor}>
            {status ? 'Parabéns!' : 'Ops!'}
          </Text>
          <Text as="b" fontSize="4xl" lineHeight={1.3} textColor={mainTextColor}>
            {status ? 'Você foi autenticado com sucesso.' : 'Não autorizado.'}
          </Text>
        </Box>
        <Box width={70} height={1.5} bg={'#fa5b52'} borderRadius="2xl"></Box>
        <Image alt="Logo" width={400} src={status ? avatarSuccess.src : avatarError.src} />
      </Box>

      {!!status ? (
        <>
          {/* {responseTokenAccess && (
            <>
              <Box>
                <Text as="b" color={mainTextColor}>
                  {'Access Token'}
                </Text>
              </Box>
              <Flex marginBottom={4} gap={2} align="center" justify="center">
                <Box padding={2} width={'100%'} borderRadius="lg" backgroundColor="#282923" border={'solid 1px #eaeaea'}>
                  <Text color={'#e0d56d'}>{limitString(responseTokenAccess, 44)}</Text>
                </Box>
                <Tooltip label="Copiado!" isOpen={showTooltip}>
                  <IconButton
                    size="md"
                    color={'white'}
                    icon={<FaCopy />}
                    aria-label="Copiar"
                    backgroundColor="#212ffc"
                    onClick={handleCopyClick}
                    _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
                  />
                </Tooltip>
              </Flex>
            </>
          )} */}
          <Box>
            <Text as="b" color={mainTextColor}>
              {'Refresh Token'}
            </Text>
          </Box>
          <Flex gap={2} align="center" justify="center">
            <Box padding={2} width={'100%'} borderRadius="lg" backgroundColor="#282923" border={'solid 1px #eaeaea'}>
              <Text color={'#e0d56d'}>{limitString(responseTokenRefresh, 44)}</Text>
            </Box>
            <Tooltip label="Copiado!" isOpen={showTooltip}>
              <IconButton
                size="md"
                color={'white'}
                icon={<FaCopy />}
                aria-label="Copiar"
                backgroundColor="#212ffc"
                onClick={handleCopyClick}
                _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
              />
            </Tooltip>
          </Flex>
          <Box marginY={4}>
            <AssessmentBtn width={'full'} click={hanldeClickRefreshAccess} title="Autenticação por RefreshToken" />
          </Box>
        </>
      ) : null}
    </>
  );
};
