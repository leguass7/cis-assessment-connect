import { FaUserAstronaut } from 'react-icons/fa';
import { TbApiApp } from 'react-icons/tb';

import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';

import { useAOSAnimation } from '~/hooks/aosAnimate';

import { AccessCard } from '~/components/AccessCard/indext';
import { PublicLayout } from '~/components/PublicLayout';

interface Props {}

const Home: React.FC<Props> = () => {
  const textColor = useColorModeValue('#313131', 'white');
  useAOSAnimation();

  return (
    <PublicLayout>
      <Box mt={10}>
        <Box my={'70px'}>
          <Text as="b" fontSize="5xl" color={textColor}>
            Autenticação
          </Text>
          <Box width={70} height={1.5} bg={'#fa5b52'} borderRadius="2xl"></Box>
        </Box>
        <SimpleGrid spacing={20} flexWrap={'wrap'} justifyContent="center" columns={{ base: 1, md: 2 }}>
          <Box data-aos="fade-right">
            <AccessCard title="Login" path="/login" icon={FaUserAstronaut} />
          </Box>
          <Box data-aos="fade-left">
            <AccessCard title="Oauth" path="/oauth" icon={TbApiApp} />
          </Box>
        </SimpleGrid>
      </Box>
    </PublicLayout>
  );
};

export default Home;
