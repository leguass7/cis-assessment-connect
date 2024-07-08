import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { FaUserAstronaut } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";
import { AccessCard } from "~/components/AccessCard/indext";
import { PublicLayout } from "~/components/PublicLayout";
import { useAOSAnimation } from "~/hooks/aosAnimate";

interface Props {}

const Home: React.FC<Props> = () => {
  const textColor = useColorModeValue("#313131", "white");
  useAOSAnimation();

  return (
    <PublicLayout>
      <Box mt={10}>
        <Box my={"70px"}>
          <Text as="b" fontSize="5xl" color={textColor}>
            Autenticação
          </Text>
          <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} justifyContent="center" flexWrap={"wrap"}>
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
