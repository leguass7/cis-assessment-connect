import type { ReactElement } from 'react';
import { useState } from 'react';

import { Button, useColorModeValue } from '@chakra-ui/react';

import iconBlue from '../../../public/logo/favicon.svg';
import iconWhite from '../../../public/logo/icon-white.png';

interface Props {
  click: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | { base: 'sm' | 'md' | 'lg' | 'xl'; md: 'sm' | 'md' | 'lg' | 'xl' };
  width?: string | number;
  showIcon?: boolean;
}

export const AssessmentBtn = ({ click, showIcon = true, size = 'lg', title = 'CisAssessment', width = 'none' }: Props): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  const bgColor = useColorModeValue('cisBlue', 'gray.700');
  const textColor = useColorModeValue('#ffff', '#ffff');
  const hoverBgColor = useColorModeValue('gray.50', 'gray.800');
  const hoverTextColor = useColorModeValue('cisBlue', '#f0f0f0');
  const hoverBorderColor = useColorModeValue('#212ffc', '#ffff');

  const iconColor = useColorModeValue(iconWhite.src, iconWhite.src);
  const hoverIconColor = useColorModeValue(iconBlue.src, iconWhite.src);

  return (
    <Button
      size={size}
      width={width}
      onClick={click}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      color={isHovered ? hoverTextColor : textColor}
      background={isHovered ? hoverBgColor : bgColor}
      border={`1px solid ${isHovered ? hoverBorderColor : 'transparent'}`}
      leftIcon={showIcon ? <img alt="Logo" width={16} src={isHovered ? hoverIconColor : iconColor} /> : null}
      _hover={{
        background: hoverBgColor,
        border: `1px solid ${hoverBorderColor}`,
        color: hoverTextColor,
      }}
    >
      {title}
    </Button>
  );
};
