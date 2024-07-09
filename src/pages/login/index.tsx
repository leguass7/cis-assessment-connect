import { useState } from "react";

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
import { useRouter } from "next/router";

import "aos/dist/aos.css";

import { useAOSAnimation } from "~/hooks/aosAnimate";

import { CodeHighlight } from "~/components/CodeHighlight";
import { codeStringPost, refreshTokenResponse, RequestAuthorization } from "~/components/CodeHighlight/constants";
import { FormClientCredentials } from "~/components/Forms/FormClientCredential";
import { FormPassword } from "~/components/Forms/FormPassword";
import { FormRefreshToken } from "~/components/Forms/FormRefreshToken";
import { PublicLayout } from "~/components/PublicLayout";
import { SkeletonLoader } from "~/components/SkeletonLoader";

type Props = {};

const Login: React.FC<Props> = () => {
  const router = useRouter();
  const queryAccordion = parseInt(router.query.accordion as string) || 0;
  const [loading, setLoading] = useState(false);
  const [accordionIndex, setAccordionIndex] = useState<number | number[]>(queryAccordion);

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
            <Box mt={20} data-aos="fade-up">
              <Accordion
                allowToggle
                width="100%"
                borderWidth={1}
                borderRadius="xl"
                transition="easeInOut"
                backgroundColor={bgColor}
                transitionDuration="0.3s"
                defaultIndex={accordionIndex}
                transitionTimingFunction="ease-in-out"
              >
                <AccordionItem border={"none"} borderBottom={`1px solid ${borderColor}`}>
                  <AccordionButton padding="20px">
                    <Box flex="1" textAlign="left">
                      <Text as="b" fontSize="lg" color={textColor}>
                        {"Login"}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} backgroundColor={panelColor}>
                    <FormPassword onChange={handlerLoad} />
                    <CodeHighlight codeString={codeStringPost} />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border={"none"} borderBottom={`1px solid ${borderColor}`}>
                  <AccordionButton padding="20px">
                    <Box flex="1" textAlign="left">
                      <Text as="b" fontSize="lg" color={textColor}>
                        {"RefreshToken"}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} backgroundColor={panelColor}>
                    <FormRefreshToken onChange={handlerLoad} />
                    <CodeHighlight codeString={refreshTokenResponse} />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border={"none"} borderBottom={`1px solid ${borderColor}`}>
                  <AccordionButton padding="20px">
                    <Box flex="1" textAlign="left">
                      <Text as="b" fontSize="lg" color={textColor}>
                        {"Credenciais do Cliente"}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} backgroundColor={panelColor}>
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
