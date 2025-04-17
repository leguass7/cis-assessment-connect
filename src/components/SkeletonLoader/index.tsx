import React from 'react';

import { Box, Flex, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react';

export const SkeletonLoader = () => {
  const skeletonColorStart = useColorModeValue('gray.200', 'gray.600');
  const skeletonColorEnd = useColorModeValue('gray.300', 'gray.700');
  return (
    <Stack mt={20} spacing={4}>
      <Skeleton height="50px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
      <Skeleton width="60%" height="26px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
      <Skeleton width="50%" height="26px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
      <Skeleton width="70%" height="320px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
      <Box mt={10}>
        <Skeleton height="50px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
        <Flex mt={4} gap={4} justify="space-between">
          <Skeleton width="50%" height="40px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
          <Skeleton width="50%" height="40px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
        </Flex>
      </Box>
    </Stack>
  );
};
