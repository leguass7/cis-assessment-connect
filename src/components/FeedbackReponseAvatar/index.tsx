import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import avatarSuccess from "../../../public/imgs/astro-cis.png";
import avatarError from "../../../public/imgs/astro404.png";
import { codeStringError, codeStringGet } from "../CodeHighlight/constants";
import { CodeHighlight } from "../CodeHighlight";

type Props = {
  status?: boolean;
};

export const FeedbackReponseAvatar: React.FC<Props> = ({ status }) => {
  const mainTextColor = useColorModeValue("#3b3b3b", "gray.200");
  const successColor = useColorModeValue("green.400", "green.300");
  const errorColor = useColorModeValue("red.400", "red.300");

  return (
    <Box width={"100%"}>
      <Box display="flex" flexDirection="column">
        <Text lineHeight={1.2} textColor={status ? successColor : errorColor} fontSize="6xl" as="b">
          {status ? "Parabéns!" : "Ops!"}
        </Text>
        <Text lineHeight={1.2} textColor={mainTextColor} fontSize="4xl" as="b">
          {status ? "Você foi autenticado com sucesso." : "Infelizmente não foi autorizado."}
        </Text>
      </Box>
      <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
      <Image src={status ? avatarSuccess.src : avatarError.src} alt="Logo" width={450} />
      <Box marginY={12} bgColor="#282923" padding={1} borderRadius="2xl">
        <CodeHighlight codeString={status ? codeStringGet : codeStringError} />
      </Box>
    </Box>
  );
};
