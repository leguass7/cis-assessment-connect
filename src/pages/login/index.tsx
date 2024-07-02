import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { FormLogin } from "~/components/Forms/FormLogin";
import { PublicLayout } from "~/components/PublicLayout";

type Props = {};

const Login: React.FC<Props> = () => {
  return (
    <PublicLayout>
      <Container maxW="sm" mt={10}>
        <Box
          p={{ base: 2, md: 8 }}
          borderWidth={{ base: 0, md: 1 }}
          borderRadius={{ base: 0, md: "xl" }}
          boxShadow={{ base: 0, md: "lg" }}
          bg={{ base: "transparent", md: "white" }}
        >
          <FormLogin />
        </Box>
      </Container>
    </PublicLayout>
  );
};

export default Login;
