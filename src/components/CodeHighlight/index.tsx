import { Box } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeHighlight = () => {
  const codeString = `
    method: "POST",
    route: "/auth",
    headers: {
    "Content-Type": "application/json",
    },

    body: JSON.stringify({
    email: 'string',
    password: 'string',
    }),
  `;

  return (
    <Box marginY={12} bgColor={"#282a36"} width={480} borderRadius="xl">
      <SyntaxHighlighter style={okaidia} language="javascript">
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
};
