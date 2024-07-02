// components/CardBox.tsx

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

interface CardBoxProps {
  title: string;
  path: string;
  icon: IconType;
}

export const AccessCard: React.FC<CardBoxProps> = ({ title, path, icon: Icon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Box
      onClick={handleClick}
      border={"solid 1px #eaeaea"}
      position={"relative"}
      overflow={"hidden"}
      w={300}
      h={200}
      maxW={500}
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="xl"
      textAlign="start"
      _hover={{ boxShadow: "2xl", transform: "scale(1.01)", cursor: "pointer" }}
      transition="all 0.2s"
    >
      <Box position={"absolute"} right={-4} top={0}>
        <Icon size={210} color="#a5a5a5ae" />
      </Box>
      <Text textColor={"#3b3b3b"} fontSize="3xl" as="b">
        {title}
      </Text>
    </Box>
  );
};
