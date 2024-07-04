import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import bgDefault from "../../../public/imgs/bg-default.png";
import bgDark from "../../../public/imgs/bg-dark.png";

type Props = {
  children?: React.ReactNode;
};

export const PublicLayout: React.FC<Props> = ({ children }) => {
  const backgroundImage = useColorModeValue(bgDefault.src, bgDark.src);
  const textColor = useColorModeValue("black", "white");
  const sizeBg = useColorModeValue("120%", "100%");

  return (
    <Box
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize={sizeBg}
      backgroundPosition="center"
      width="100%"
      minHeight="100vh"
      color={textColor}
    >
      <Container maxW="container.xl" centerContent>
        <Header />
        {children}
      </Container>
    </Box>
  );
};
