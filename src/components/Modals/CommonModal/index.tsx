import React from 'react';

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  showCancelButton?: boolean;
}

const CommonModal: React.FC<CommonModalProps> = ({ children, isOpen, onClose, showCancelButton = true, title }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded="2xl">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {showCancelButton && (
          <ModalFooter mb={4} paddingX={6}>
            <Button width={'full'} onClick={onClose} colorScheme="gray">
              Cancelar
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CommonModal;
