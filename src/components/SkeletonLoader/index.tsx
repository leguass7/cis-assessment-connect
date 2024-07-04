import { Skeleton, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const SkeletonLoader = () => {
  const skeletonColorStart = useColorModeValue("gray.200", "gray.600");
  const skeletonColorEnd = useColorModeValue("gray.300", "gray.700");
  return (
    <Stack spacing={4} mt={10}>
      <Skeleton height="50px" borderRadius="lg" startColor={skeletonColorStart} endColor={skeletonColorEnd} />
      <Skeleton
        height="26px"
        width="80%"
        borderRadius="lg"
        startColor={skeletonColorStart}
        endColor={skeletonColorEnd}
      />
      <Skeleton
        height="26px"
        width="60%"
        borderRadius="lg"
        startColor={skeletonColorStart}
        endColor={skeletonColorEnd}
      />
      <Skeleton
        height="200px"
        width="70%"
        borderRadius="lg"
        startColor={skeletonColorStart}
        endColor={skeletonColorEnd}
      />
    </Stack>
  );
};
