import React from 'react';

import { Box, Drawer, DrawerContent, DrawerOverlay, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';

export const DrawerComponent = ({ children, isOpen, onClose }) => {
  // const drawerHeight = useBreakpointValue({ base: '60%', md: '80%' });
  const drawerMaxWidth = useBreakpointValue({ base: '100%', md: '400px' });
  const bgColorByDarkMode = useColorModeValue('white', 'gray.800');

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={'top'}>
      <DrawerOverlay />
      <DrawerContent
        height={'60%'}
        overflowY="auto"
        maxWidth={drawerMaxWidth}
        bgGradient="linear(135deg, #yourThemeColor 60%, #darkenedThemeColor 100%)"
        _dark={{
          bgGradient: 'linear(135deg, #darkThemeColor 60%, #evenDarkerThemeColor 100%)',
        }}
      >
        <Box
          maxH="100%"
          height="100%"
          display="flex"
          position="relative"
          paddingX={{ md: 8 }}
          flexDirection="column"
          justifyContent="center"
          bgColor={bgColorByDarkMode}
          paddingY={{ base: 4, md: 6 }}
        >
          {children}
        </Box>
      </DrawerContent>
    </Drawer>
  );
};
