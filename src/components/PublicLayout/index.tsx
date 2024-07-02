import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import bgDefault from "../../../public/imgs/bg-default.png";

type Props = {
  children?: React.ReactNode;
};

export const PublicLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      backgroundImage={`url(${bgDefault.src})`}
      backgroundSize="120%"
      backgroundPosition="center"
      width="100%"
      minHeight="100vh"
    >
      <Container maxW="container.xl" centerContent>
        <Header />
        {children}
      </Container>
    </Box>
  );
};
