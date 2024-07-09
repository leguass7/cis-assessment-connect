import React from "react";

import { Skeleton, Stack, useColorModeValue } from "@chakra-ui/react";

export const SkeletonLoader = () => {
  const skeletonColorStart = useColorModeValue("gray.200", "gray.600");
  const skeletonColorEnd = useColorModeValue("gray.300", "gray.700");
  return (
    <Stack mt={10} spacing={4}>
      <Skeleton height="50px" borderRadius="lg" endColor={skeletonColorEnd} startColor={skeletonColorStart} />
      <Skeleton
        width="80%"
        height="26px"
        borderRadius="lg"
        endColor={skeletonColorEnd}
        startColor={skeletonColorStart}
      />
      <Skeleton
        width="60%"
        height="26px"
        borderRadius="lg"
        endColor={skeletonColorEnd}
        startColor={skeletonColorStart}
      />
      <Skeleton
        width="70%"
        height="200px"
        borderRadius="lg"
        endColor={skeletonColorEnd}
        startColor={skeletonColorStart}
      />
    </Stack>
  );
};
