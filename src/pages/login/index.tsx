import { Box, Container } from "@chakra-ui/react";
import "aos/dist/aos.css";
import React, { useState } from "react";
import { CodeHighlight } from "~/components/CodeHighlight";
import { codeStringPost } from "~/components/CodeHighlight/constants";
import { FormLogin } from "~/components/Forms/FormLogin";
import { PublicLayout } from "~/components/PublicLayout";
import { SkeletonLoader } from "~/components/SkeletonLoader";
import { useAOSAnimation } from "~/hooks/aosAnimate";

type Props = {};

const Login: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const handlerLoad = (load: boolean) => {
    setLoading(load);
  };

  useAOSAnimation();
  return (
    <PublicLayout>
      <Container mt={8}>
        {loading ? (
          <SkeletonLoader />
        ) : (
          <>
            <Box data-aos="fade-down">
              <FormLogin onChange={handlerLoad} />
            </Box>
            <Box data-aos="fade-up" marginY={8} bgColor={"#282923"} width={480} borderRadius="xl">
              <CodeHighlight codeString={codeStringPost} />
            </Box>
          </>
        )}
      </Container>
    </PublicLayout>
  );
};

export default Login;
