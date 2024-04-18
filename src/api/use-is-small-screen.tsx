import { useBreakpoint } from "@chakra-ui/react";
import { useMemo } from "react";

export function useIsSmallScreen() {
    const screenSize = useBreakpoint();
    const smallScreenSizes = useMemo(() => ["base", "sm"], []); // "md"
    return useMemo(
        () => smallScreenSizes.includes(screenSize),
        [smallScreenSizes, screenSize]
    );
}
