import { Button, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import iconWhite from "../../../public/logo/icon-white.png";
import iconBlue from "../../../public/logo/favicon.svg";
import { useAOSAnimation } from "~/hooks/aosAnimate";
import { AssessmentBtn } from "../AssessmentBtn/indext";

export const FormOauth = () => {
  const { aos } = useAOSAnimation();
  const { data: session } = useSession();

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
      <AssessmentBtn click={handleSignIn} />
    </Stack>
  );
};
