import { Box, Text } from '@chakra-ui/react';

import { DrawerComponent } from './DrawerComponent';

export const DrawerInventoryPassport = ({ isOpen, onClose }) => {
  return (
    <DrawerComponent isOpen={isOpen} onClose={onClose}>
      <Box>
        <Text>Lista de passsaports</Text>
      </Box>
    </DrawerComponent>
  );
};
