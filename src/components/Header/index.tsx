// components/Header.tsx

import { Box, Flex, Spacer, Image, IconButton, Container } from "@chakra-ui/react";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <Container maxW="container.xl">
      <Box display={{ base: "flex", md: "block" }} padding={8}>
        <Flex justify={"center"} alignItems="center">
          {/* <Image src={logoCis.src} alt="Logo" width={250} /> */}
          <Spacer />
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;
