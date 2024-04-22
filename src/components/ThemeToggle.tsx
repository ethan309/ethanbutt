import { useMemo } from "react";
import { useColorMode } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import HotCornerButton from "./HotCornerButton";

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const icon = useMemo(
        () => (colorMode === "light" ? CiLight : CiDark),
        [colorMode]
    );

    return (
        <HotCornerButton
            corner="top-right"
            onClick={toggleColorMode}
            icon={icon}
            label="Toggle color theme"
        />
    );
};

export default ThemeToggle;
