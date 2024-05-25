import { useMemo } from "react";
import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import HotCornerButton from "./HotCornerButton";

interface IProps {
    isHotCorner?: boolean;
}

const ThemeToggle = (props: IProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const icon = useMemo(
        () => (colorMode === "light" ? CiLight : CiDark),
        [colorMode]
    );

    if (!props.isHotCorner) {
        return (
            <IconButton
                onClick={toggleColorMode}
                icon={<Icon as={icon} />}
                aria-label="Toggle color theme"
            />
        );
    }

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
