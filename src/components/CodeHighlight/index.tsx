import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia';

import { Box } from '@chakra-ui/react';

type Props = {
  codeString: string;
};

export const CodeHighlight: React.FC<Props> = ({ codeString }) => {
  return (
    <Box width={'100%'} borderRadius="xl" bgColor={'#282923'}>
      <SyntaxHighlighter style={okaidia} language="javascript">
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
};
