import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";

type Props = {
  codeString: string;
};

export const CodeHighlight: React.FC<Props> = ({ codeString }) => {
  return (
    <Box bgColor={"#282923"} width={"100%"} borderRadius="xl">
      <SyntaxHighlighter style={okaidia} language="javascript">
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
};
