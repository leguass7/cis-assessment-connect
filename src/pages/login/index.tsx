import { Box, Container, Skeleton, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { PublicLayout } from "~/components/PublicLayout";
import { FormLogin } from "~/components/Forms/FormLogin";
import { FeedbackReponseAvatar } from "~/components/FeedbackReponseAvatar";
import { SkeletonLoader } from "~/components/SkeletonLoader";

type Props = {};

const Login: React.FC<Props> = () => {
  const [login, setLogin] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handlerLoad = (load: boolean) => {
    setLoading(load);
  };

  const boxBg = useColorModeValue("white", "gray.800");

  return (
    <PublicLayout>
      <Container mt={10}>
        {loading ? (
          <SkeletonLoader />
        ) : login === undefined ? (
          <Box
            mt={12}
            p={{ base: 2, md: 8 }}
            borderWidth={{ base: 0, md: 1 }}
            borderRadius={{ base: 0, md: "xl" }}
            boxShadow={{ base: 0, md: "lg" }}
            bg={{ base: "transparent", md: boxBg }}
          >
            <FormLogin onChange={handlerLoad} />
          </Box>
        ) : (
          <FeedbackReponseAvatar status={login} />
        )}
      </Container>
    </PublicLayout>
  );
};

export default Login;
