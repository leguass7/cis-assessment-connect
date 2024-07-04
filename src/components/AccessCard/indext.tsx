// components/CardBox.tsx

import React from "react";
import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

interface CardBoxProps {
  title: string;
  path: string;
  icon: IconType;
}

export const AccessCard: React.FC<CardBoxProps> = ({ title, path, icon: Icon }) => {
  const router = useRouter();
  const bgColor = useColorModeValue("white", "#242424");
  const borderColor = useColorModeValue("#eaeaea", "#353535");
  const teextColor = useColorModeValue("#3b3b3b", "white");

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Box
      onClick={handleClick}
      border={"solid 2px " + borderColor}
      position={"relative"}
      overflow={"hidden"}
      w={300}
      h={200}
      maxW={500}
      bg={bgColor}
      p={6}
      borderRadius="xl"
      shadow="xl"
      textAlign="start"
      _hover={{ boxShadow: "2xl", transform: "scale(1.01)", cursor: "pointer" }}
      transition="all 0.2s"
    >
      <Box position={"absolute"} right={-4} top={0}>
        <Icon size={222} color="#a8a8a6" />
      </Box>
      <Text textColor={teextColor} fontSize="3xl" as="b">
        {title}
      </Text>
    </Box>
  );
};

