import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FeedbackReponseAvatar } from "~/components/FeedbackReponseAvatar";
import { PublicLayout } from "~/components/PublicLayout";
import { useAOSAnimation } from "~/hooks/aosAnimate";

type Props = {};

const StatusPage: React.FC<Props> = () => {
  const { query } = useRouter();
  const status = query.status as string;
  const statusDto = status === "success" ? true : false;
  useAOSAnimation();
  return (
    <PublicLayout>
      <Container mt={6}>
        <FeedbackReponseAvatar status={statusDto} />
      </Container>
    </PublicLayout>
  );
};

export default StatusPage;
