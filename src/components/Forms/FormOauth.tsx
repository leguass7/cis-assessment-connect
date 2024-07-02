import { Box, Button, Stack, useToast } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import router, { useRouter } from "next/router";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import iconWhite from "../../../public/logo/icon-white.png";
import iconBlue from "../../../public/logo/favicon.svg";

export const FormOauth = () => {
  const { data: session } = useSession();
  const [hover, setHover] = useState(false);

  return (
    <Stack spacing={6}>
      {!session && (
        <Button leftIcon={<FaGoogle />} colorScheme="red" variant="solid" onClick={() => signIn()}>
          Entrar com Google
        </Button>
      )}
      <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid">
        Entrar com LinkedIn
      </Button>
      <Button
        background={hover ? "#ffff" : "#212ffc"}
        color={hover ? "#212ffc" : "#ffff"}
        border={hover ? "1px solid #212ffc" : "none"}
        leftIcon={<img src={hover ? iconBlue.src : iconWhite.src} alt="Logo" width={16} />}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Entrar com CisAssessment
      </Button>
    </Stack>
  );
};
