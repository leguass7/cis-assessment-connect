import { Container } from '@chakra-ui/react';

import 'aos/dist/aos.css';

import { useAOSAnimation } from '~/hooks/aosAnimate';

import { PublicLayout } from '~/components/PublicLayout';

type Props = {};

const Documentation: React.FC<Props> = () => {
  useAOSAnimation();

  return (
    <PublicLayout>
      <Container></Container>
    </PublicLayout>
  );
};

export default Documentation;
