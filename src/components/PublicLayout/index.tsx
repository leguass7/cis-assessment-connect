import React from 'react';

import { Box, Container, useColorModeValue } from '@chakra-ui/react';

import { Header } from '~/components/Header';

import bgDark from '../../../public/imgs/bg-dark.png';
import bgDefault from '../../../public/imgs/bg-default.png';

type Props = {
  children?: React.ReactNode;
};

export const PublicLayout: React.FC<Props> = ({ children }) => {
  const backgroundImage = useColorModeValue(bgDefault.src, bgDark.src);
  const textColor = useColorModeValue('black', 'white');
  const sizeBg = useColorModeValue('120%', '100%');

  return (
    <Box
      width="100%"
      minHeight="100vh"
      color={textColor}
      backgroundSize={sizeBg}
      backgroundPosition="center"
      backgroundImage={`url(${backgroundImage})`}
    >
      <Container centerContent maxW="container.xl">
        <Header />
        {children}
      </Container>
    </Box>
  );
};
