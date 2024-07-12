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
        <Button variant="solid" colorScheme="red" onClick={handleSignIn} leftIcon={<FaGoogle />} size={{ base: 'md', md: 'lg' }}>
          Google
        </Button>
      )}
      <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />} size={{ base: 'md', md: 'lg' }}>
        LinkedIn
      </Button>
      <AssessmentBtn click={handleSignIn} size={{ base: 'md', md: 'lg' }} />
    </Stack>
  );
};
