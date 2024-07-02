import { Box, Card, Container, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FormLogin } from "~/components/Forms/FormLogin";
import { PublicLayout } from "~/components/PublicLayout";
import astroError from "../../../public/imgs/astro404.png";
import astronauta from "../../../public/imgs/astro-cis.png";
import { FormOauth } from "~/components/Forms/FormOauth";

type Props = {};

const Oauth: React.FC<Props> = () => {
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
          <FormOauth />
        )}
      </Container>
    </PublicLayout>
  );
};

export default Oauth;
