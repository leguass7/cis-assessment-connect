import React, { useCallback, useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';

import { Box, Flex, Grid, IconButton, Image, Stack, Text, Tooltip, useClipboard, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { getStore } from '~/services/authLogin';

import { useApiResponse } from '~/providers/AppProvider';

import avatarSuccess from '../../../public/imgs/astro-cis.png';
import avatarError from '../../../public/imgs/astro401.png';
import { limitString } from '../../helpers/string';
import { AssessmentBtn } from '../AssessmentBtn/indext';

type Props = {
  status?: boolean;
};

export const FeedbackReponseAvatar: React.FC<Props> = ({ status }) => {
  const [showAccessTooltip, setShowAccessTooltip] = useState(false);
  const [showRefreshTooltip, setShowRefreshTooltip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshToken, setRefreshToken] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const { authRefreshToken } = useApiResponse();
  const router = useRouter();

  const mainTextColor = useColorModeValue('#3b3b3b', 'gray.200');
  const successColor = useColorModeValue('green.400', 'green.300');
  const errorColor = useColorModeValue('red.400', 'red.300');

  const { onCopy: copyRefreshToken } = useClipboard(refreshToken);
  const { onCopy: copyAccessToken } = useClipboard(accessToken);

  const handleCopyClick = (copyFunction: () => void, setShowTooltip: React.Dispatch<React.SetStateAction<boolean>>) => {
    copyFunction();
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleClickRefreshAccess = () => {
    router.push({
      pathname: '/login',
      query: { accordion: 1 },
    });
  };

  const fetchStoreData = useCallback(async () => {
    setLoading(true);
    const storeData = await getStore();
    setLoading(false);

    if (storeData) {
      setRefreshToken(storeData?.refreshToken);
      setAccessToken(storeData?.accessToken);
    } else {
      setRefreshToken('');
      setAccessToken('');
    }
  }, []);

  useEffect(() => {
    fetchStoreData();
  }, [fetchStoreData]);

  const handlerAccessRouter = () => {
    router.push({
      pathname: '/router-api',
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
          {authRefreshToken && (
            <>
              <Box>
                <Text as="b" color={mainTextColor}>
                  {'Access Token'}
                </Text>
              </Box>
              <Flex gap={2} align="center" marginBottom={4} justify="center">
                <Box padding={2} width={'100%'} borderRadius="lg" backgroundColor="#282923" border={'solid 1px #eaeaea'}>
                  <Text color={'#e0d56d'}>{limitString(accessToken, 44)}</Text>
                </Box>
                <Tooltip label="Copiado!" isOpen={showAccessTooltip}>
                  <IconButton
                    size="md"
                    color={'white'}
                    icon={<FaCopy />}
                    aria-label="Copiar"
                    backgroundColor="#212ffc"
                    onClick={() => handleCopyClick(copyAccessToken, setShowAccessTooltip)}
                    _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
                  />
                </Tooltip>
              </Flex>
            </>
          )}
          <Box>
            <Text as="b" color={mainTextColor}>
              {'Refresh Token'}
            </Text>
          </Box>
          <Flex gap={2} align="center" justify="center">
            <Box padding={2} width={'100%'} borderRadius="lg" backgroundColor="#282923" border={'solid 1px #eaeaea'}>
              {loading ? <Text>Carregando...</Text> : <Text color={'#e0d56d'}>{limitString(refreshToken, 44)}</Text>}
            </Box>
            <Tooltip label="Copiado!" isOpen={showRefreshTooltip}>
              <IconButton
                size="md"
                color={'white'}
                icon={<FaCopy />}
                aria-label="Copiar"
                backgroundColor="#212ffc"
                onClick={() => handleCopyClick(copyRefreshToken, setShowRefreshTooltip)}
                _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
              />
            </Tooltip>
          </Flex>
          <Stack gap={2} marginY={2}>
            <Grid gap={2} templateColumns="1fr 1fr">
              <AssessmentBtn showIcon={false} click={handleClickRefreshAccess} title="Autenticar RefreshToken" />
              {accessToken && <AssessmentBtn width="full" showIcon={false} title="Rotas API" click={handlerAccessRouter} />}
            </Grid>
          </Stack>
        </>
      ) : null}
    </>
  );
};
