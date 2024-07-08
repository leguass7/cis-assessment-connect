import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

interface CardBoxProps {
  title: string;
  path: string;
  icon: IconType;
}

export const AccessCard: React.FC<CardBoxProps> = ({ title, path, icon: Icon }) => {
  const router = useRouter();
  const bgColor = useColorModeValue("#f1f1f1", "#242424");
  const textColor = useColorModeValue("#3b3b3b", "white");

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Box
      onClick={handleClick}
      position={"relative"}
      overflow={"hidden"}
      w={300}
      h={200}
      maxW={500}
      bg={bgColor}
      p={6}
      borderRadius="3xl"
      shadow="2xl"
      textAlign="start"
      bgGradient={useColorModeValue("linear(to-r, #e6e6e6, #ffffff)", "linear(to-r, #333333, #242424)")}
      _hover={{ boxShadow: "2xl", transform: "scale(1.05)", cursor: "pointer" }}
      transition="transform 0.3s ease-out"
    >
      <Box
        position="absolute"
        right={-4}
        top={0}
        _hover={{ transform: "scale(1.2)", transition: "transform 0.4s ease-out" }}
      >
        <Icon size={210} color="#a8a8a6" />
      </Box>
      <Text color={textColor} fontSize="3xl" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};
