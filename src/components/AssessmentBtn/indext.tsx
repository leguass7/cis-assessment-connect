import type { ReactElement } from "react";

import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

import iconBlue from "../../../public/logo/favicon.svg";
import iconWhite from "../../../public/logo/icon-white.png";

interface Props {
  click: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  width?: string | number;
}

export const AssessmentBtn = ({ click, size = "lg", title = "CisAssessment", width = "none" }: Props): ReactElement => {
  const { colorMode } = useColorMode();
  const cisBackground = useColorModeValue("#212ffc", "#ffff");
  const cisHoverBackground = useColorModeValue("#ffff", "#212ffc");
  const cisTextColor = useColorModeValue("#ffff", "#212ffc");
  const cisHoverTextColor = useColorModeValue("#212ffc", "#ffff");
  const cisIcon = useColorModeValue(iconWhite.src, iconBlue.src);
  const cisHoverIcon = useColorModeValue(iconBlue.src, iconWhite.src);

  return (
    <Button
      size={size}
      width={width}
      onClick={click}
      color={colorMode === "dark" ? cisTextColor : cisHoverTextColor}
      background={colorMode === "dark" ? cisBackground : cisHoverBackground}
      border={colorMode !== "dark" ? `1px solid ${cisHoverTextColor}` : "none"}
      leftIcon={<img alt="Logo" width={16} src={colorMode === "dark" ? cisIcon : cisHoverIcon} />}
      _hover={{
        background: colorMode === "dark" ? cisHoverBackground : cisBackground,
        border: colorMode !== "dark" ? `1px solid ${cisHoverTextColor}` : "none",
        color: colorMode === "dark" ? cisHoverTextColor : cisTextColor,
      }}
    >
      {title}
    </Button>
  );
};
