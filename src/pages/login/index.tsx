import { Box, Container, Skeleton, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { PublicLayout } from "~/components/PublicLayout";
import { FormLogin } from "~/components/Forms/FormLogin";
import { FeedbackReponseAvatar } from "~/components/FeedbackReponseAvatar";

type Props = {};

const Login: React.FC<Props> = () => {
  const [login, setLogin] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLogin(true);
    } catch (error) {
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async () => {
    await handleLogin();
  };

  const boxBg = useColorModeValue("white", "gray.800");
  const skeletonColorStart = useColorModeValue("gray.200", "gray.600");
  const skeletonColorEnd = useColorModeValue("gray.300", "gray.700");

  return (
    <PublicLayout>
      <Container mt={10}>
        {loading ? (
          <Stack spacing={4} mt={10}>
            <Skeleton height="50px" borderRadius="lg" startColor={skeletonColorStart} endColor={skeletonColorEnd} />
            <Skeleton
              height="26px"
              width="80%"
              borderRadius="lg"
              startColor={skeletonColorStart}
              endColor={skeletonColorEnd}
            />
            <Skeleton
              height="26px"
              width="60%"
              borderRadius="lg"
              startColor={skeletonColorStart}
              endColor={skeletonColorEnd}
            />
            <Skeleton
              height="200px"
              width="70%"
              borderRadius="lg"
              startColor={skeletonColorStart}
              endColor={skeletonColorEnd}
            />
          </Stack>
        ) : login === undefined ? (
          <Box
            mt={12}
            p={{ base: 2, md: 8 }}
            borderWidth={{ base: 0, md: 1 }}
            borderRadius={{ base: 0, md: "xl" }}
            boxShadow={{ base: 0, md: "lg" }}
            bg={{ base: "transparent", md: boxBg }}
          >
            <FormLogin onLogin={handleFormSubmit} />
          </Box>
        ) : (
          <FeedbackReponseAvatar status={login} />
        )}
      </Container>
    </PublicLayout>
  );
};

export default Login;

