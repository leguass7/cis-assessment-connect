// pages/index.tsx

import { Box, Container, Text, SimpleGrid, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaUserAstronaut } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";
import { PublicLayout } from "~/components/PublicLayout";

interface Props {}

const Home: React.FC<Props> = () => {
  const router = useRouter();

  const handleBoxClick = (path: string) => {
    router.push(path);
  };

  return (
    <PublicLayout>
      <Box mt={10}>
        <Box my={"50px"}>
          <Text as="b" fontSize="5xl" color="#313131">
            Autenticação
          </Text>
          <Box width={70} height={1.5} bg={"#fa5b52"} borderRadius="2xl"></Box>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} justifyContent="center" flexWrap={"wrap"}>
          <Box
            onClick={() => handleBoxClick("/login")}
            border={"solid 1px #eaeaea"}
            position={"relative"}
            overflow={"hidden"}
            w={300}
            h={200}
            maxW={500}
            bg="white"
            p={6}
            borderRadius="xl"
            shadow="xl"
            textAlign="start"
            _hover={{ boxShadow: "2xl", transform: "scale(1.01)" }}
            transition="all 0.2s"
          >
            <Box position={"absolute"} right={-4} top={0}>
              <FaUserAstronaut size={210} color="#a5a5a5ae" />
            </Box>
            <Text textColor={"#3b3b3b"} fontSize="3xl" as="b">
              Login
            </Text>
          </Box>
          <Box
            onClick={() => handleBoxClick("/oauth")}
            border={"solid 1px #eaeaea"}
            position={"relative"}
            overflow={"hidden"}
            w={300}
            h={200}
            maxW={500}
            bg="white"
            p={6}
            borderRadius="xl"
            shadow="lg"
            textAlign="start"
            _hover={{ boxShadow: "2xl", transform: "scale(1.01)" }}
            transition="all 0.2s"
          >
            <Box position={"absolute"} right={-10} top={-5}>
              <TbApiApp size={240} color="#a5a5a5ae" />
            </Box>
            <Text as="b" textColor={"#3b3b3b"} fontSize="3xl">
              Oauth
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </PublicLayout>
  );
};

export default Home;
