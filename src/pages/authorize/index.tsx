import React from "react";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import { AccordionComponent } from "~/components/Accordion";
import { CodeHighlight } from "~/components/CodeHighlight";
import { PublicLayout } from "~/components/PublicLayout";
import { useAOSAnimation } from "~/hooks/aosAnimate";

const AuthorizePage: React.FC = () => {
  useAOSAnimation();
  const textColor = useColorModeValue("#3b3b3b", "white");

  return (
    <PublicLayout>
      <Container mt={6}>
        <Box data-aos="fade-down" my={"50px"}>
          <Text as="b" fontSize="5xl" lineHeight={1} color={textColor}>
            {"Concessões de Acesso"}
          </Text>
          <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
        </Box>
        <Box data-aos="fade-up">
          <CodeHighlight codeString={"{{url}}/oauth/authorize"} />
          <AccordionComponent />
        </Box>
      </Container>
    </PublicLayout>
  );
};

export default AuthorizePage;
