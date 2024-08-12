import React from 'react';

import { Box, Drawer, DrawerContent, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react';

export const DrawerComponent = ({ children, isOpen, onClose }) => {
  const drawerHeight = useBreakpointValue({ base: '100vh', sm: '50vh' });

  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        overflowY="hidden"
        height={drawerHeight}
        bgGradient="linear(135deg, #yourThemeColor 60%, #darkenedThemeColor 100%)"
        _dark={{
          bgGradient: 'linear(135deg, #darkThemeColor 60%, #evenDarkerThemeColor 100%)',
        }}
      >
        <Box maxH="100%" height="100%" display="flex" position="relative" flexDirection="column" justifyContent="center">
          {children}
        </Box>
      </DrawerContent>
    </Drawer>
  );
};
