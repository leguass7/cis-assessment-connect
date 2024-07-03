import { Box, Container, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FormLogin } from "~/components/Forms/FormLogin";
import { PublicLayout } from "~/components/PublicLayout";
import astronalta from "../../../public/imgs/astro-cis.png";

type Props = {};

const Login: React.FC<Props> = () => {
  const logged = true;
  return (
    <PublicLayout>
      <Container mt={10}>
        {logged ? (
          <Box width={"100%"}>
            <Box display="flex" flexDirection="column">
              <Text lineHeight={1.2} textColor={"green.400"} fontSize="6xl" as="b">
                Parabéns!
              </Text>
              <Text lineHeight={1.2} textColor={"#3b3b3b"} fontSize="4xl" as="b">
                Você foi autenticado com sucesso.
              </Text>
            </Box>
            <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
            <Image src={astronalta.src} alt="Logo" width={400} />
          </Box>
        ) : (
          <Box
            mt={12}
            p={{ base: 2, md: 8 }}
            borderWidth={{ base: 0, md: 1 }}
            borderRadius={{ base: 0, md: "xl" }}
            boxShadow={{ base: 0, md: "lg" }}
            bg={{ base: "transparent", md: "white" }}
          >
            <FormLogin />
          </Box>
        )}
      </Container>
    </PublicLayout>
  );
};

export default Login;
