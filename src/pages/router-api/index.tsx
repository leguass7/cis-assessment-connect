import { useCallback, useEffect, useState } from 'react';

import { Box, Button, Container, Modal, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import 'aos/dist/aos.css';

import { useAOSAnimation } from '~/hooks/aosAnimate';
import { getCredits } from '~/services/credits';
import { sendInventoryPassport } from '~/services/inventory';

import { FormCreatePassport } from '~/components/Forms/FormCreatePassport';
import { PublicLayout } from '~/components/PublicLayout';

type Props = {};

const RouterApi: React.FC<Props> = () => {
  const [credits, setCredits] = useState(0);
  const [showFormPassport, setShowFormPassport] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingCredits, setLoadingCredits] = useState(false);

  const handlerShowCredit = async () => {
    setLoadingCredits(true);
    const response = await getCredits();
    setLoadingCredits(false);
    if (response?.success) {
      setCredits(response?.summary?.credits);
    }
  };

  const onClose = () => {
    setShowFormPassport(false);
  };

  const handlerSendPassportInventory = async () => {
    setLoadingSend(true);
    const response = await sendInventoryPassport(passportId);
    setLoadingSend(false);
    if (response?.success) {
      console.log('Passport enviado com sucesso');
      onClose();
    } else {
      console.log('Erro ao enviar Passport');
    }
  };

  useAOSAnimation();

  return (
    <PublicLayout>
      <Container mt={10} alignItems="center" justifyContent="center">
        <Box>{/* <FormCreatePassport /> */}</Box>
        <Button onClick={handlerShowCredit}>Consultar créditos</Button>
        {(credits >= 0 || loadingCredits) && <Text>total de créditos: {credits}</Text>}

        <Button>Criar Passport</Button>

        <Button onClick={() => setShowFormPassport(true)}>Enviar Passport-Inventario</Button>
        <Modal onClose={onClose} isOpen={showFormPassport}>
          <form onSubmit={handlerSendPassportInventory}>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Idioma" />
            <button type="submit">enviar</button>
          </form>
        </Modal>
      </Container>
    </PublicLayout>
  );
};

export default RouterApi;
