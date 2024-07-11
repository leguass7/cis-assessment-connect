import React, { useState } from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import 'aos/dist/aos.css';
import { useAOSAnimation } from '~/hooks/aosAnimate';
import { getCredits } from '~/services/credits';

import { CodeHighlight } from '~/components/CodeHighlight';
import { codeStringError } from '~/components/CodeHighlight/constants';
import { FormCreatePassport } from '~/components/Forms/FormCreatePassport';
import { FormSendPassport } from '~/components/Forms/FormSendPassport';
import { PublicLayout } from '~/components/PublicLayout';

import { codeStringPost } from '../../components/CodeHighlight/constants';

const RouterApi = () => {
  const [credits, setCredits] = useState(0);
  const [showSendFormPassport, setShowSendFormPassport] = useState(false);
  const [showCreateFormPassport, setShowCreateFormPassport] = useState(false);
  const [loadingCredits, setLoadingCredits] = useState(false);
  const [successCreatePassport, setSuccessCreatePassport] = useState(false);
  const [successSendPassport, setSuccessSendPassport] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buttonBg = useColorModeValue('#2b62e3', '#2b62e3');
  const buttonHoverBg = useColorModeValue('#1e4bbd', '#1e4bbd');
  const buttonTextColor = useColorModeValue('white', 'white');
  const bgCardColor = useColorModeValue('white', 'gray.800');

  const handlerShowCredit = async () => {
    setLoadingCredits(true);
    const response = await getCredits();
    setLoadingCredits(false);
    if (response?.success) {
      setCredits(response?.summary?.credits);
    }
  };

  const onClose = () => {
    setShowSendFormPassport(false);
    setShowCreateFormPassport(false);
  };

  const handlerChangeSuccessCreate = (success: boolean, submit: boolean) => {
    setIsSubmitting(submit);
    setSuccessCreatePassport(success);
    if (success) {
      onClose();
    }
  };
  const handlerChangeSendSuccess = (success: boolean) => {
    if (success) {
      setSuccessSendPassport(success);
      onClose();
    }
  };

  useAOSAnimation();

  return (
    <PublicLayout>
      <Container mt={10} alignItems="center" justifyContent="center">
        {(credits >= 0 || loadingCredits) && (
          <Stack padding={8} marginY={12} rounded="xl" border={'solid 1px #eaeaea'} backgroundColor={bgCardColor}>
            <Alert rounded="sm" status="info" variant={'left-accent'}>
              <AlertIcon />
              Consulte seus créditos
            </Alert>
            <Flex gap={2} align={'center'} marginBottom={4}>
              {loadingCredits ? (
                <Skeleton height="36px" width="300px" />
              ) : (
                <>
                  <Text fontSize="2xl">Total de Créditos:</Text>
                  <Text as="b" fontSize="2xl" color={'#505050'}>
                    {credits}
                  </Text>
                </>
              )}
            </Flex>
            <Button size="lg" width="full" bg={buttonBg} color={buttonTextColor} onClick={handlerShowCredit} _hover={{ bg: buttonHoverBg }}>
              Consultar Créditos
            </Button>
          </Stack>
        )}
        <Stack gap={8} padding={8} marginY={12} rounded="xl" border={'solid 1px #eaeaea'} backgroundColor={bgCardColor}>
          <Box>
            {credits <= 1 ? (
              <Alert rounded="sm" status="warning" variant={'left-accent'}>
                <AlertIcon />
                <AlertDescription>Você precisa ter créditos para enviar um passaport</AlertDescription>
              </Alert>
            ) : null}
            {successSendPassport && (
              <Alert rounded="sm" status="success" variant={'left-accent'}>
                <AlertIcon />
                <AlertDescription>Passaporte enviado com sucesso</AlertDescription>
              </Alert>
            )}
            <Button
              size="lg"
              width="full"
              marginTop={2}
              bg={buttonBg}
              color={buttonTextColor}
              isDisabled={credits < 1}
              _hover={{ bg: buttonHoverBg }}
              onClick={() => setShowSendFormPassport(true)}
            >
              Enviar Passaporte
            </Button>
          </Box>
          <Button
            size="lg"
            width="full"
            bg={buttonBg}
            color={buttonTextColor}
            _hover={{ bg: buttonHoverBg }}
            onClick={() => setShowCreateFormPassport(true)}
          >
            Criar Passport
          </Button>
        </Stack>
        <Modal isCentered onClose={onClose} isOpen={showCreateFormPassport}>
          <ModalOverlay />
          <ModalContent rounded={'xl'}>
            <ModalHeader>Criar Passaporte</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormCreatePassport onSuccess={handlerChangeSuccessCreate} />
              <ModalFooter mt={2} mb={2} padding={0}>
                <Button width={'full'} onClick={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
              {isSubmitting ? (
                <Box>
                  <CodeHighlight codeString={successCreatePassport ? codeStringPost : codeStringError} />
                </Box>
              ) : null}
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal isCentered onClose={onClose} isOpen={showSendFormPassport}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enviar Passaporte</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormSendPassport onSuccess={handlerChangeSendSuccess} />
            </ModalBody>
            <ModalFooter paddingY={2} paddingBottom={5}>
              <Button width={'full'} onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </PublicLayout>
  );
};

export default RouterApi;
