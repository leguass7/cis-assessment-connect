import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';
import { FaBookSkull } from 'react-icons/fa6';

import { Box, Button, Container, Flex, IconButton, Image, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logoCis from '../../../public/logo/logo.png';
import { AssessmentBtn } from '../AssessmentBtn/indext';

type Props = {};

export const Header: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const colorbtn = useColorModeValue('gray.200', 'gray.700');
  const hoverColor = useColorModeValue('gray.300', 'gray.600');

  const docsButtonText = useColorModeValue('gray.700', 'gray.100');

  const handleAuthorizeClick = () => {
    router.push('/authorize');
  };

  const handlerClickGoDocs = () => {
    window.open('https://back.aws.cisassessment.com.br/api/v1/docs-api/', '_blank');
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Stack width="full" paddingTop={{ base: 6, md: 4 }}>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Stack py={2} width="100%" align="center" gap={{ base: 0, md: 4 }} direction={{ base: 'column', md: 'row' }}>
          {router.pathname !== '/' && (
            <IconButton aria-label="Go back" icon={<FaArrowLeft />} onClick={handleBackClick} display={{ base: 'none', md: 'flex' }} />
          )}
          <Link href="/">
            <Image alt="Logo" src={logoCis.src} width={{ base: 300, md: 400 }} _hover={{ cursor: 'pointer' }} />
          </Link>
          <Flex gap={2} width="100%" align={'center'} marginTop={{ base: 5, md: 0 }} justify={{ base: 'center', md: 'end' }}>
            {router.pathname !== '/' && (
              <IconButton aria-label="Go back" icon={<FaArrowLeft />} onClick={handleBackClick} display={{ base: 'flex', md: 'none' }} />
            )}
            <AssessmentBtn size="md" title="Authorize" click={handleAuthorizeClick} />
            <Button
              size="md"
              paddingY={5}
              fontWeight="bold"
              variant="outline"
              textColor={docsButtonText}
              onClick={handlerClickGoDocs}
              backgroundColor="transparent"
              leftIcon={<FaBookSkull fontSize="20px" />}
              _hover={{ backgroundColor: 'transparent', border: '1px solid #212ffc' }}
            >
              Docs
            </Button>
            <IconButton
              background={colorbtn}
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              _hover={{ backgroundColor: hoverColor }}
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            />
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
};
