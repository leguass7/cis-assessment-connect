import { Box, SimpleGrid, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaUserAstronaut } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";
import { AccessCard } from "~/components/AccessCard/indext";
import { PublicLayout } from "~/components/PublicLayout";

interface Props {}

const Home: React.FC<Props> = () => {
  const router = useRouter();
  const textColor = useColorModeValue("#313131", "white");

  const handleBoxClick = (path: string) => {
    router.push(path);
  };

  return (
    <PublicLayout>
      <Box mt={10}>
        <Box my={"50px"}>
          <Text as="b" fontSize="5xl" color={textColor}>
            Autenticação
          </Text>
          <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} justifyContent="center" flexWrap={"wrap"}>
          <AccessCard title="Login" path="/login" icon={FaUserAstronaut} />
          <AccessCard title="Oauth" path="/oauth" icon={TbApiApp} />
        </SimpleGrid>
      </Box>
    </PublicLayout>
  );
};

export default Home;

