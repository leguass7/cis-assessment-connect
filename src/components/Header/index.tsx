import { Box, Container, Flex, IconButton, Image, Spacer, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import logoCis from "../../../public/logo/logo.svg";

type Props = {};

const Header: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl">
      <Box display={{ base: "flex", md: "block" }} justifyContent={{ base: "center", md: "none" }} padding={8}>
        <Flex justify={"center"} alignItems="center">
          <Link color="#212ffc" href={"/"}>
            <Image src={logoCis.src} alt="Logo" width={250} _hover={{ cursor: "pointer" }} />
          </Link>
          <Spacer />
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;

