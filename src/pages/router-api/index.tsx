import { useState } from 'react';

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
  const bgCardColor = useColorModeValue('white', 'gray.800');
  const creditTextColor = useColorModeValue('gray.700', 'gray.50');

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
            {loadingCredits ? (
              <Stack mb={8} gap={4}>
                <Skeleton width="100%" height="36px" />
                <Skeleton height="36px" width={{ base: '100%', md: '300px' }} />
              </Stack>
            ) : (
              <Stack>
                <Alert rounded="sm" status="info" variant={'left-accent'}>
                  <AlertIcon />
                  Consulte seus créditos
                </Alert>
                <Flex my={4} gap={2} align="center">
                  <Text fontSize={{ base: 'lg', md: '2xl' }}>Total de Créditos:</Text>
                  <Text as="b" fontSize={'3xl'} color={creditTextColor}>
                    {credits}
                  </Text>
                </Flex>
              </Stack>
            )}
            <Button
              size="lg"
              width="full"
              bg={buttonBg}
              color={'white'}
              backgroundColor="#212ffc"
              onClick={handlerShowCredit}
              _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
            >
              Consultar Créditos
            </Button>
          </Stack>
        )}
        <Stack gap={4} padding={8} marginY={12} rounded="xl" border={'solid 1px #eaeaea'} backgroundColor={bgCardColor}>
          <Box>
            {credits <= 1 ? (
              <Alert rounded="sm" status="warning" variant={'left-accent'}>
                <AlertIcon />
                <AlertDescription>Você precisa ter créditos para enviar um passaport</AlertDescription>
              </Alert>
            ) : null}
            {successSendPassport && (
              <Alert mb={2} rounded="sm" status="success" variant={'left-accent'}>
                <AlertIcon />
                <AlertDescription>Passaporte enviado com sucesso</AlertDescription>
              </Alert>
            )}
            <Button
              size="lg"
              width="full"
              bg={buttonBg}
              marginTop={2}
              color={'white'}
              isDisabled={credits < 1}
              backgroundColor="#212ffc"
              onClick={() => setShowSendFormPassport(true)}
              _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
            >
              Enviar Passaporte
            </Button>
          </Box>
          <Button
            size="lg"
            width="full"
            bg={buttonBg}
            marginTop={2}
            color={'white'}
            backgroundColor="#212ffc"
            onClick={() => setShowCreateFormPassport(true)}
            _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
          >
            Criar Passport
          </Button>
        </Stack>
        <Modal isCentered onClose={onClose} isOpen={showCreateFormPassport}>
          <ModalOverlay />
          <ModalContent rounded={'xl'} mx={{ base: 4, md: 0 }}>
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
          <ModalContent rounded={'xl'} mx={{ base: 4, md: 0 }}>
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
