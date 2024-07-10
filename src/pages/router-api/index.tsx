import { useState } from 'react';

import { Box, Button, Container, Modal, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import 'aos/dist/aos.css';

import { useAOSAnimation } from '~/hooks/aosAnimate';

import { PublicLayout } from '~/components/PublicLayout';
import { FormCreatePassport } from '~/components/Forms/FormCreatePassport';

type Props = {};

const RouterApi: React.FC<Props> = () => {
  const [credits, setCredits] = useState(0);
  const [showFormPassport, setShowFormPassport] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlerLoad = (load: boolean) => {
    setLoading(load);
  };
  const onClose = () => {
    console.log('closed');
  };

  useAOSAnimation();

  return (
    <PublicLayout>
      <Container mt={10} alignItems="center" justifyContent="center">
        <Box>{/* <FormCreatePassport /> */}</Box>
        <Button>Consultar créditos</Button>
        {credits > 0 && <Text>total de creditos: {credits}</Text>}

        <Button onClick={() => setShowFormPassport(true)}>Enviar Passaport</Button>
        <Modal isOpen={showFormPassport} onClose={onClose}>
          <form onSubmit={''}>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Nome" />
            <button type="submit">enviar</button>
          </form>
        </Modal>
      </Container>
    </PublicLayout>
  );
};

export default RouterApi;
