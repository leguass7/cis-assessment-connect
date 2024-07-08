import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "aos/dist/aos.css";
import React, { useState } from "react";
import { CodeHighlight } from "~/components/CodeHighlight";
import {
  codeStringPost,
  refreshTokenGrantPayload,
  refreshTokenResponse,
  RequestAuthorization,
} from "~/components/CodeHighlight/constants";
import { FormClientCredentials } from "~/components/Forms/FormClientCredential";
import { FormPassword } from "~/components/Forms/FormPassword";
import { FormRefreshToken } from "~/components/Forms/FormRefreshToken";
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

  const bgColor = useColorModeValue("white", "#2c2c2c");
  const borderColor = useColorModeValue("#dbdbdb", "#525252");
  const panelColor = useColorModeValue("#f5f6f7", "#2c2c2c");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <PublicLayout>
      <Container mt={2}>
        {loading ? (
          <SkeletonLoader />
        ) : (
          <>
            <Box data-aos="fade-up" mt={20}>
              <Accordion
                defaultIndex={[0]}
                backgroundColor={bgColor}
                borderRadius="xl"
                borderWidth={1}
                allowToggle
                width="100%"
                transition="easeInOut"
                transitionDuration="0.3s"
                transitionTimingFunction="ease-in-out"
              >
                <AccordionItem border={"none"} borderBottom={`1px solid ${borderColor}`}>
                  <AccordionButton padding="20px">
                    <Box flex="1" textAlign="left">
                      <Text fontSize="lg" as="b" color={textColor}>
                        {"Login"}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel backgroundColor={panelColor} pb={4}>
                    <FormPassword onChange={handlerLoad} />
                    <CodeHighlight codeString={codeStringPost} />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border={"none"} borderBottom={`1px solid ${borderColor}`}>
                  <AccordionButton padding="20px">
                    <Box flex="1" textAlign="left">
                      <Text fontSize="lg" as="b" color={textColor}>
                        {"RefreshToken"}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel backgroundColor={panelColor} pb={4}>
                    <FormRefreshToken onChange={handlerLoad} />
                    <CodeHighlight codeString={refreshTokenResponse} />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border={"none"} borderBottom={`1px solid ${borderColor}`}>
                  <AccordionButton padding="20px">
                    <Box flex="1" textAlign="left">
                      <Text fontSize="lg" as="b" color={textColor}>
                        {"Credenciais do Cliente"}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel backgroundColor={panelColor} pb={4}>
                    <FormClientCredentials />
                    <CodeHighlight codeString={RequestAuthorization} />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </>
        )}
      </Container>
    </PublicLayout>
  );
};

export default Login;
