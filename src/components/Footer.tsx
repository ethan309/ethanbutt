import { HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { useIsSmallScreen } from "../api/use-is-small-screen";
import ThemeToggle from "./ThemeToggle";
import ViewSource from "./ViewSource";
import PrivacyPolicy from "./PrivacyPolicy";
import SiteMenu from "./Menu";

const Footer = () => {
    const isSmallScreen = useIsSmallScreen();

    if (isSmallScreen) {
        return (
            <HStack minH="4rem">
                <SiteMenu />
                <ThemeToggle />
                <ViewSource />
                <PrivacyPolicy />
            </HStack>
        );
    }

    return (
        <>
            <Spacer minH="4rem" />
            <SiteMenu isHotCorner />
            <ThemeToggle isHotCorner />
            <ViewSource isHotCorner />
            <PrivacyPolicy isHotCorner />
        </>
    );
};

export default Footer;
