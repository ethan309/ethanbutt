import { Card, CardBody, keyframes } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";

type FadeInDelay = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80;

interface IProps {
    fadeInDelay?: FadeInDelay;
    children: React.ReactElement | React.ReactElement[];
}

const SectionTile = (props: IProps) => {
    const { children, fadeInDelay = 10 } = props;

    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    const fadeIn = useMemo(() => {
        const fadeInFrames = keyframes`
          0% { opacity: 0; }
          ${fadeInDelay}% { opacity: 0; }
          100% { opacity: 1; }
        `;
        return `${fadeInFrames} ease 2s`;
    }, [fadeInDelay]);

    return (
        <Card
            borderColor={isHovered ? "Highlight" : "Background"}
            borderWidth={2}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            animation={fadeIn}
        >
            <CardBody>{children}</CardBody>
        </Card>
    );
};

export default SectionTile;
