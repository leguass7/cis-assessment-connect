import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';

import { Box, Container, Flex, IconButton, Image, Stack, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logoCis from '../../../public/logo/logo.svg';
import { AssessmentBtn } from '../AssessmentBtn/indext';

type Props = {};

const Header: React.FC<Props> = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const handleAuthorizeClick = () => {
    router.push('/authorize');
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Container maxW="container.xl">
      <Box display="flex" paddingTop={{ base: 6, md: 4 }}>
        <Flex width={'100%'} alignItems="center" justifyContent="space-between">
          {isMobile ? (
            <Stack py={2} width="100%" align="center">
              <Link href="/">
                <Image alt="Logo" width={300} src={logoCis.src} _hover={{ cursor: 'pointer' }} />
              </Link>
              <Flex gap={2} marginTop={4} width={'100%'} justifyContent="center">
                {router.pathname !== '/' && <IconButton aria-label="Go back" icon={<FaArrowLeft />} onClick={handleBackClick} />}
                <AssessmentBtn size="md" width="100%" title="Authorize" click={handleAuthorizeClick} />
                <IconButton
                  background={'#eaeaea'}
                  onClick={toggleColorMode}
                  aria-label="Toggle dark mode"
                  icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                />
              </Flex>
            </Stack>
          ) : (
            <Stack gap={4} width={'full'} direction={'row'} alignItems="center" position="relative" justify={'space-between'}>
              {router.pathname !== '/' && (
                <Box left={0} position="absolute">
                  <IconButton aria-label="Go back" icon={<FaArrowLeft />} onClick={handleBackClick} />
                </Box>
              )}
              <Link href="/">
                <Image alt="Logo" width={250} src={logoCis.src} _hover={{ cursor: 'pointer' }} marginLeft={router.pathname !== '/' ? '60px' : 0} />
              </Link>
              <Flex gap={4} marginLeft="auto">
                <AssessmentBtn size="md" title="Authorize" click={handleAuthorizeClick} />
                <IconButton onClick={toggleColorMode} aria-label="Toggle dark mode" icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} />
              </Flex>
            </Stack>
          )}
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;
