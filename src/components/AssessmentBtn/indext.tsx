import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { ReactElement } from "react";
import iconBlue from "../../../public/logo/favicon.svg";
import iconWhite from "../../../public/logo/icon-white.png";

interface Props {
  click: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const AssessmentBtn = ({ click, size = "lg", title = "CisAssessment" }: Props): ReactElement => {
  const { colorMode } = useColorMode();
  const cisBackground = useColorModeValue("#212ffc", "#ffff");
  const cisHoverBackground = useColorModeValue("#ffff", "#212ffc");
  const cisTextColor = useColorModeValue("#ffff", "#212ffc");
  const cisHoverTextColor = useColorModeValue("#212ffc", "#ffff");
  const cisIcon = useColorModeValue(iconWhite.src, iconBlue.src);
  const cisHoverIcon = useColorModeValue(iconBlue.src, iconWhite.src);

  return (
    <Button
      onClick={click}
      size={size}
      background={colorMode === "dark" ? cisBackground : cisHoverBackground}
      color={colorMode === "dark" ? cisTextColor : cisHoverTextColor}
      border={colorMode !== "dark" ? `1px solid ${cisHoverTextColor}` : "none"}
      leftIcon={<img src={colorMode === "dark" ? cisIcon : cisHoverIcon} alt="Logo" width={16} />}
      _hover={{
        background: colorMode === "dark" ? cisHoverBackground : cisBackground,
        color: colorMode === "dark" ? cisHoverTextColor : cisTextColor,
        border: colorMode !== "dark" ? `1px solid ${cisHoverTextColor}` : "none",
      }}
    >
      {title}
    </Button>
  );
};
