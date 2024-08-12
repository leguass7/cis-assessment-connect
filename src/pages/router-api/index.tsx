import { useCallback, useEffect, useState } from 'react';
import { HiDocumentPlus } from 'react-icons/hi2';
import { IoIosRocket } from 'react-icons/io';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
  Icon,
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
import { getPaginatePassport } from '~/services/passport';
import type { IPassport } from '~/services/passport/passport.dto';

import { AccordionTablePassports } from '~/components/AccordionTablePassports';
import { CodeHighlight } from '~/components/CodeHighlight';
import { codeStringError } from '~/components/CodeHighlight/constants';
import { FormCreatePassport } from '~/components/Forms/FormCreatePassport';
import { FormSendPassport } from '~/components/Forms/FormSendPassport';
import { PublicLayout } from '~/components/PublicLayout';
import { SkeletonLoader } from '~/components/SkeletonLoader';

import { codeStringPost } from '../../components/CodeHighlight/constants';

export type PreparedPassport = IPassport & {
  answered?: number;
  pending?: number;
  countInventory?: number;
  occupationArea?: {
    name: string;
  };
};

const RouterApi = () => {
  const [credits, setCredits] = useState(0);
  const [showSendFormPassport, setShowSendFormPassport] = useState(false);
  const [showCreateFormPassport, setShowCreateFormPassport] = useState(false);
  const [loadingCredits, setLoadingCredits] = useState(false);
  const [successCreatePassport, setSuccessCreatePassport] = useState(false);
  const [successSendPassport, setSuccessSendPassport] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [passports, setPassports] = useState<PreparedPassport[]>([]);

  const buttonBg = useColorModeValue('cisBlue', 'gray.700');
  const bgCardColor = useColorModeValue('white', 'gray.800');
  const creditBoxColor = useColorModeValue('gray.100', 'gray.900');
  const creditTextColor = useColorModeValue('gray.700', 'gray.200');
  const boxTextColor = useColorModeValue('gray.700', 'gray.200');
  const boxHoverBgColor = useColorModeValue('gray.100', 'gray.700');
  const iconColor = useColorModeValue('#2158da', 'gray.50');

  const paginatePassports = useCallback(async () => {
    setShowSkeleton(true);
    const response = await getPaginatePassport();
    setShowSkeleton(false);
    if (response?.success) {
      setPassports(response?.data);
    }
  }, []);

  useEffect(() => {
    paginatePassports();
  }, [paginatePassports]);

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
    <>
      <PublicLayout>
        <Container mt={10} alignItems="center" justifyContent="center">
          {(credits >= 0 || loadingCredits) && (
            <Stack padding={8} rounded="xl" marginTop={12} border={'solid 1px #eaeaea'} backgroundColor={bgCardColor}>
              {loadingCredits ? (
                <Stack mb={8} gap={4}>
                  <Skeleton width="100%" height="36px" />
                  <Skeleton height="36px" width={{ base: '100%', md: '300px' }} />
                </Stack>
              ) : (
                <Stack>
                  {credits <= 1 ? (
                    <Alert rounded="sm" status="warning" variant={'left-accent'}>
                      <AlertIcon />
                      <AlertDescription fontSize="sm">Você precisa ter créditos para enviar um passaporte, consulte seus créditos</AlertDescription>
                    </Alert>
                  ) : null}
                  <Flex my={4} direction={'column'}>
                    <Box padding={4} rounded={'xl'} width={'full'} bgColor={creditBoxColor}>
                      <Text fontSize={{ base: 'lg', md: '1xl' }}>Total de Créditos:</Text>
                      <Text as="b" fontSize={'5xl'} color={creditTextColor}>
                        {credits.toLocaleString('pt-BR')}
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              )}
              <Button
                size="lg"
                width="full"
                color={'white'}
                backgroundColor={buttonBg}
                onClick={handlerShowCredit}
                _hover={{ backgroundColor: '#4d59fa', rounded: 'lg', transition: '0.3s' }}
              >
                Consultar Créditos
              </Button>
              <Box mt={1}>
                {successSendPassport && (
                  <Alert mb={2} rounded="sm" status="success" variant={'left-accent'}>
                    <AlertIcon />
                    <AlertDescription>Passaporte enviado com sucesso</AlertDescription>
                  </Alert>
                )}
                <Flex mt={2} gap={4}>
                  <Box
                    p={4}
                    flex="1"
                    borderWidth={1}
                    borderRadius="lg"
                    textAlign="center"
                    bgColor={bgCardColor}
                    opacity={credits < 1 ? 0.6 : 1}
                    pointerEvents={credits < 1 ? 'none' : 'auto'}
                    cursor={credits < 1 ? 'not-allowed' : 'pointer'}
                    onClick={() => credits >= 1 && setShowSendFormPassport(true)}
                    _hover={credits < 1 ? {} : { bgColor: boxHoverBgColor, shadow: 'md', transition: '0.3s' }}
                  >
                    <Flex direction="column" alignItems="center" justifyContent="center">
                      <Icon mb={2} boxSize={8} as={IoIosRocket} color={credits < 1 ? 'gray.400' : iconColor} />
                      <Text as="b" fontSize="lg" color={credits < 1 ? 'gray.400' : boxTextColor}>
                        Enviar Passaporte
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    p={4}
                    flex="1"
                    borderWidth={1}
                    cursor="pointer"
                    borderRadius="lg"
                    textAlign="center"
                    bgColor={bgCardColor}
                    onClick={() => setShowCreateFormPassport(true)}
                    _hover={{ bgColor: boxHoverBgColor, shadow: 'md', transition: '0.3s' }}
                  >
                    <Flex direction="column" alignItems="center" justifyContent="center">
                      <Icon mb={2} boxSize={8} color={iconColor} as={HiDocumentPlus} />
                      <Text as="b" fontSize="lg" color={boxTextColor}>
                        Criar Passaporte
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          )}
        </Container>
        <Stack width={'full'}>
          {showSkeleton ? (
            <SkeletonLoader />
          ) : (
            <Box width={'full'} marginBottom={8} mt={{ base: 8, md: 20 }}>
              <AccordionTablePassports accordionData={passports} />
            </Box>
          )}
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
              <FormSendPassport passports={passports} onSuccess={handlerChangeSendSuccess} />
            </ModalBody>
            <ModalFooter paddingY={2} paddingBottom={5}>
              <Button width={'full'} onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </PublicLayout>
    </>
  );
};

export default RouterApi;
