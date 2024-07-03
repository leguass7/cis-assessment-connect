import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import avatarSuccess from "../../../public/imgs/astro-cis.png";
import avatarError from "../../../public/imgs/astro404.png";

type Props = {
  status?: boolean;
};

export const FeedbackReponseAvatar: React.FC<Props> = ({ status }) => (
  <Box width={"100%"}>
    <Box display="flex" flexDirection="column">
      <Text lineHeight={1.2} textColor={status ? "green.400" : "red.400"} fontSize="6xl" as="b">
        {status ? "Parabéns!" : "Ops!"}
      </Text>
      <Text lineHeight={1.2} textColor={"#3b3b3b"} fontSize="4xl" as="b">
        {status ? "Você foi autenticado com sucesso." : "Infelismente não foi autorizado."}
      </Text>
    </Box>
    <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
    <Image src={status ? avatarSuccess.src : avatarError.src} alt="Logo" width={450} />
  </Box>
);

