import { Box, Card, Container, Divider, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FormLogin } from "~/components/Forms/FormLogin";
import { PublicLayout } from "~/components/PublicLayout";
import astroError from "../../../public/imgs/astro404.png";
import astronauta from "../../../public/imgs/astro-cis.png";
import { FormOauth } from "~/components/Forms/FormOauth";

type Props = {};

const Oauth: React.FC<Props> = () => {
  const bgColor = useColorModeValue("#ffff", "gray.800");
  const border = useColorModeValue("#eeeeee", "#363434");
  const logged = false;
  return (
    <PublicLayout>
      <Container mt={10} alignItems="center" justifyContent="center">
        {logged ? (
          <Box width={"100%"}>
            <Text lineHeight={1.2} textColor={"#3b3b3b"} fontSize="5xl" as="b">
              Usuário autenticado com sucesso.
            </Text>
            <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
            <Image src={astronauta.src} alt="Logo" width={400} />
          </Box>
        ) : (
          <Box flexDirection={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Text lineHeight={1.1} fontSize="5xl" fontWeight="bold">
                Você pode se autenticar por outros meios.
              </Text>
              <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
            </Box>
            <Box
              boxShadow="lg"
              mt={20}
              borderRadius={"xl"}
              padding={8}
              width={"100%"}
              border={"solid 1px" + border}
              bgColor={bgColor}
            >
              <FormOauth />
            </Box>
          </Box>
        )}
      </Container>
    </PublicLayout>
  );
};

export default Oauth;
