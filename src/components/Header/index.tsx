import { Box, Button, Container, Flex, IconButton, Image, Spacer, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaMoon, FaSun, FaUserLock } from "react-icons/fa";
import logoCis from "../../../public/logo/logo.svg";
import { AssessmentBtn } from "../AssessmentBtn/indext";

type Props = {};

const Header: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const handleAuthorizeClick = () => {
    router.push("/authorize");
  };

  return (
    <Container maxW="container.xl">
      <Box display="flex" paddingY={4}>
        <Flex
          width={"100%"}
          justifyContent={{ base: "center", md: "space-between" }}
          gap={{ base: 4, md: 0 }}
          alignItems="center"
        >
          <Link href="/">
            <Image src={logoCis.src} alt="Logo" width={250} _hover={{ cursor: "pointer" }} />
          </Link>
          <Flex gap={4}>
            <AssessmentBtn size="md" click={handleAuthorizeClick} title="Authorize" />
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;
