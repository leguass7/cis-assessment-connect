import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FeedbackReponseAvatar } from "~/components/FeedbackReponseAvatar";
import { PublicLayout } from "~/components/PublicLayout";

type Props = {};

const StatusPage: React.FC<Props> = () => {
  const { query } = useRouter();
  const status = query.status as string;
  const statusDto = status === "success" ? true : false;
  return (
    <PublicLayout>
      <Container mt={10}>
        <FeedbackReponseAvatar status={statusDto} />
      </Container>
    </PublicLayout>
  );
};

export default StatusPage;
