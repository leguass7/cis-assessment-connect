import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';

import { Box, Container, Flex, IconButton, Image, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logoCis from '../../../public/logo/logo.svg';
import { AssessmentBtn } from '../AssessmentBtn/indext';

type Props = {};

const Header: React.FC<Props> = () => {
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
      <Box paddingY={4} display="flex">
        <Flex width={'100%'} alignItems="center" gap={{ base: 4, md: 0 }} justifyContent={{ base: 'center', md: 'space-between' }}>
          <Flex gap={4} alignItems="center">
            {router.pathname !== '/' && <IconButton aria-label="Go back" icon={<FaArrowLeft />} onClick={handleBackClick} />}
            <Link href="/">
              <Image alt="Logo" width={250} src={logoCis.src} _hover={{ cursor: 'pointer' }} />
            </Link>
          </Flex>
          <Flex gap={4}>
            <AssessmentBtn size="md" title="Authorize" click={handleAuthorizeClick} />
            <IconButton onClick={toggleColorMode} aria-label="Toggle dark mode" icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;
