import { Button, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import iconWhite from "../../../public/logo/icon-white.png";
import iconBlue from "../../../public/logo/favicon.svg";

export const FormOauth = () => {
  const { data: session } = useSession();
  const { colorMode } = useColorMode();
  const cisBackground = useColorModeValue("#212ffc", "#ffff");
  const cisHoverBackground = useColorModeValue("#ffff", "#212ffc");
  const cisTextColor = useColorModeValue("#ffff", "#212ffc");
  const cisHoverTextColor = useColorModeValue("#212ffc", "#ffff");
  const cisIcon = useColorModeValue(iconWhite.src, iconBlue.src);
  const cisHoverIcon = useColorModeValue(iconBlue.src, iconWhite.src);

  const handleSignIn = () => {
    signIn();
  };

  return (
    <Stack spacing={6}>
      {!session && (
        <Button size="lg" leftIcon={<FaGoogle />} colorScheme="red" variant="solid" onClick={handleSignIn}>
          Google
        </Button>
      )}
      <Button size="lg" leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid">
        LinkedIn
      </Button>
      <Button
        size="lg"
        background={colorMode === "dark" ? cisBackground : cisHoverBackground}
        color={colorMode === "dark" ? cisTextColor : cisHoverTextColor}
        border={colorMode !== "dark" ? `1px solid ${cisHoverTextColor}` : "none"}
        leftIcon={<img src={colorMode === "dark" ? cisIcon : cisHoverIcon} alt="Logo" width={16} />}
        _hover={{
          background: colorMode === "dark" ? cisHoverBackground : cisBackground,
          color: colorMode === "dark" ? cisHoverTextColor : cisTextColor,
          border: colorMode !== "dark" ? `1px solid ${cisHoverTextColor}` : "none",
        }}
      >
        CisAssessment
      </Button>
    </Stack>
  );
};
