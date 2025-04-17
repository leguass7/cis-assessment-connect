import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';

import 'aos/dist/aos.css';

import { useAOSAnimation } from '~/hooks/aosAnimate';

import { PublicLayout } from '~/components/PublicLayout';

type Props = {};

const Documentation: React.FC<Props> = () => {
  useAOSAnimation();

  const textColor = useColorModeValue('gray.700', 'gray.100');

  return (
    <PublicLayout>
      <Container maxW={'full'}>
        <Box my={{ base: '20px', md: '70px' }}>
          <Text as="b" fontSize="5xl" color={textColor}>
            Documentação
          </Text>
          <Box width={70} height={1.5} bg={'#fa5b52'} borderRadius="2xl"></Box>
        </Box>
      </Container>
    </PublicLayout>
  );
};

export default Documentation;
