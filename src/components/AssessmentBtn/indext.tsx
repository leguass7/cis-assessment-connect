import type { ReactElement } from "react";
import { useState } from "react";

import { Button, useColorModeValue } from "@chakra-ui/react";

import iconBlue from "../../../public/logo/favicon.svg";
import iconWhite from "../../../public/logo/icon-white.png";

interface Props {
  click: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  width?: string | number;
}

export const AssessmentBtn = ({ click, size = "lg", title = "CisAssessment", width = "none" }: Props): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  const bgColor = useColorModeValue("#212ffc", "#ffff");
  const textColor = useColorModeValue("#ffff", "#212ffc");
  const hoverBgColor = useColorModeValue("#ffff", "#212ffc");
  const hoverTextColor = useColorModeValue("#212ffc", "#ffff");
  const iconColor = useColorModeValue(iconWhite.src, iconBlue.src);
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
      border={isHovered ? `1px solid ${hoverTextColor}` : `1px solid transparent`}
      leftIcon={<img alt="Logo" width={16} src={isHovered ? hoverIconColor : iconColor} />}
      _hover={{
        background: hoverBgColor,
        border: `1px solid ${hoverTextColor}`,
        color: hoverTextColor,
      }}
    >
      {title}
    </Button>
  );
};
