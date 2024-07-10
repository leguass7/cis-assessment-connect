import { FaGoogle, FaLinkedin } from 'react-icons/fa';

import { Button, Stack } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';

import { AssessmentBtn } from '../AssessmentBtn/indext';

export const FormOauth = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <Stack spacing={6}>
      {!session && (
        <Button size="lg" variant="solid" colorScheme="red" onClick={handleSignIn} leftIcon={<FaGoogle />}>
          Google
        </Button>
      )}
      <Button size="lg" variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
        LinkedIn
      </Button>
      <AssessmentBtn click={handleSignIn} />
    </Stack>
  );
};
