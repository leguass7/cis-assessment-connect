import { Box, Image, Text, useColorModeValue, Flex, Button, useClipboard, Stack } from "@chakra-ui/react";
import React from "react";
import { FaCopy } from "react-icons/fa";
import avatarSuccess from "../../../public/imgs/astro-cis.png";
import avatarError from "../../../public/imgs/astro401.png";
import { useApiResponse } from "~/providers/ResponseApiProvider";
import { limitString } from "../../helpers/string";

type Props = {
  status?: boolean;
};

export const FeedbackReponseAvatar: React.FC<Props> = ({ status }) => {
  const { apiResponse } = useApiResponse();
  const mainTextColor = useColorModeValue("#3b3b3b", "gray.200");
  const successColor = useColorModeValue("green.400", "green.300");
  const errorColor = useColorModeValue("red.400", "red.300");
  const responseToken = apiResponse?.accessToken;

  const { hasCopied, onCopy } = useClipboard(responseToken || "");

  return (
    <>
      <Box data-aos="zoom-in" width={"100%"}>
        <Box display="flex" flexDirection="column">
          <Text lineHeight={1.2} textColor={status ? successColor : errorColor} fontSize="6xl" as="b">
            {status ? "Parabéns!" : "Ops!"}
          </Text>
          <Text lineHeight={1.3} textColor={mainTextColor} fontSize="4xl" as="b">
            {status ? "Você foi autenticado com sucesso." : "Não autorizado."}
          </Text>
        </Box>
        <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
        <Image src={status ? avatarSuccess.src : avatarError.src} alt="Logo" width={450} />
      </Box>

      <Stack mt={2} spacing={4}>
        <Box backgroundColor="#282923" padding={4} borderRadius="lg" border={"solid 1px #eaeaea"}>
          <Text color={"#eee067"}>{limitString(responseToken, 110)}</Text>
        </Box>
        <Button onClick={onCopy} leftIcon={<FaCopy />} colorScheme="blue" size="sm">
          {hasCopied ? "Copiado!" : "Copiar"}
        </Button>
      </Stack>
    </>
  );
};
