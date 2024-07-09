import React from 'react';

import { Box, Container, Image, Text, useColorModeValue } from '@chakra-ui/react';

import { FormOauth } from '~/components/Forms/FormOauth';
import { PublicLayout } from '~/components/PublicLayout';

import astronauta from '../../../public/imgs/astro-cis.png';

type Props = {};

const Oauth: React.FC<Props> = () => {
  const bgColor = useColorModeValue('#ffff', 'gray.800');
  const border = useColorModeValue('#eeeeee', '#363434');
  const logged = false;

  return (
    <PublicLayout>
      <Container mt={10} alignItems="center" justifyContent="center">
        {logged ? (
          <Box width={'100%'}>
            <Text as="b" fontSize="5xl" lineHeight={1.2} textColor={'#3b3b3b'}>
              Usuário autenticado com sucesso.
            </Text>
            <Box width={70} height={1.5} bg={'#fa5b52'} borderRadius="2xl"></Box>
            <Image alt="Logo" width={400} src={astronauta.src} />
          </Box>
        ) : (
          <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
            <Box data-aos="fade-down">
              <Text fontSize="5xl" lineHeight={1.1} fontWeight="bold">
                Você pode se autenticar por outros meios.
              </Text>
              <Box width={70} height={1.5} bg={'#fa5b52'} borderRadius="2xl"></Box>
            </Box>
            <Box
              mt={20}
              padding={8}
              boxShadow="lg"
              width={'100%'}
              bgColor={bgColor}
              data-aos="fade-up"
              borderRadius={'xl'}
              border={'solid 1px' + border}
            >
              <FormOauth />
            </Box>
          </Box>
        )}
      </Container>
    </PublicLayout>
  );
};

export default Oauth;
