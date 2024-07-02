// components/Header.tsx

import { Box, Flex, Spacer, Image, IconButton, Container } from "@chakra-ui/react";
import logoCis from "../../../public/logo/logo.svg";
import Link from "next/link";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <Container maxW="container.xl">
      <Box display={{ base: "flex", md: "block" }} justifyContent={{ base: "center", md: "none" }} padding={8}>
        <Link color="#212ffc" href={"/"}>
          <Flex justify={"center"} alignItems="center" _hover={{ cursor: "pointer" }}>
            <Image src={logoCis.src} alt="Logo" width={250} />
            <Spacer />
          </Flex>
        </Link>
      </Box>
    </Container>
  );
};

export default Header;
