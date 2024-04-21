import { useCallback, useMemo, useState } from "react";
import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const icon = useMemo(
        () => (colorMode === "light" ? CiLight : CiDark),
        [colorMode]
    );

    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
        <IconButton
            opacity={isHovered ? "100%" : "33%"}
            variant="ghost"
            onClick={toggleColorMode}
            icon={<Icon as={icon} ml={2} mb={2} />}
            aria-label="Toggle color theme"
            borderRadius="none"
            borderBottomLeftRadius="full"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
};

export default ThemeToggle;
