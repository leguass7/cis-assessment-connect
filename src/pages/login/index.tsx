import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { CodeHighlight } from "~/components/CodeHighlight";
import { FormLogin } from "~/components/Forms/FormLogin";
import { PublicLayout } from "~/components/PublicLayout";
import { SkeletonLoader } from "~/components/SkeletonLoader";

type Props = {};

const Login: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);

  const handlerLoad = (load: boolean) => {
    setLoading(load);
  };

  return (
    <PublicLayout>
      <Container mt={10}>{loading ? <SkeletonLoader /> : <FormLogin onChange={handlerLoad} />}</Container>
      <CodeHighlight />
    </PublicLayout>
  );
};

export default Login;
