import React from 'react';
import type { IconType } from 'react-icons';

import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface CardBoxProps {
  title: string;
  path: string;
  icon: IconType;
}

export const AccessCard: React.FC<CardBoxProps> = ({ icon: Icon, path, title }) => {
  const router = useRouter();
  const bgColor = useColorModeValue('#f1f1f1', '#242424');
  const textColor = useColorModeValue('#3b3b3b', 'white');

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Box
      p={6}
      w={300}
      h={200}
      maxW={500}
      bg={bgColor}
      shadow="2xl"
      textAlign="start"
      borderRadius="3xl"
      overflow={'hidden'}
      onClick={handleClick}
      position={'relative'}
      transition="transform 0.3s ease-out"
      _hover={{ boxShadow: '2xl', cursor: 'pointer', transform: 'scale(1.05)' }}
      bgGradient={useColorModeValue('linear(to-r, #e6e6e6, #ffffff)', 'linear(to-r, #333333, #242424)')}
    >
      <Box top={0} right={-4} position="absolute" _hover={{ transform: 'scale(1.2)', transition: 'transform 0.4s ease-out' }}>
        <Icon size={210} color="#a8a8a6" />
      </Box>
      <Text fontSize="3xl" color={textColor} fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};
