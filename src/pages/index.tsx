import { FaUserAstronaut } from 'react-icons/fa';
import { TbApiApp } from 'react-icons/tb';

import { Box, SimpleGrid, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react';

import { useAOSAnimation } from '~/hooks/aosAnimate';

import { AccessCard } from '~/components/AccessCard/indext';
import { PublicLayout } from '~/components/PublicLayout';

interface Props {}

const Home: React.FC<Props> = () => {
  const [isMobile] = useMediaQuery('(max-width: 500px)');
  const textColor = useColorModeValue('gray.700', 'gray.50');
  useAOSAnimation();

  return (
    <PublicLayout>
      <Box mt={10}>
        <Box my={{ base: '20px', md: '70px' }}>
          <Text as="b" fontSize="5xl" color={textColor}>
            Autenticação
          </Text>
          <Box width={70} height={1.5} bg={'#fa5b52'} borderRadius="2xl"></Box>
        </Box>
        <SimpleGrid flexWrap={'wrap'} justifyContent="center" columns={{ base: 1, md: 2 }} spacing={{ base: 12, md: 20 }}>
          {isMobile ? (
            <>
              <AccessCard title="Login" path="/login" icon={FaUserAstronaut} />
              <AccessCard path="/" title="Oauth" icon={TbApiApp} />
            </>
          ) : (
            <>
              <Box data-aos="fade-right">
                <AccessCard title="Login" path="/login" icon={FaUserAstronaut} />
              </Box>
              <Box data-aos="fade-left">
                <AccessCard path="/" title="Oauth" icon={TbApiApp} />
              </Box>
            </>
          )}
        </SimpleGrid>
      </Box>
    </PublicLayout>
  );
};

export default Home;
