import React, { useCallback, useMemo, useState } from "react";
import { Box, Icon, IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Corner = "top-right" | "bottom-right" | "top-left" | "bottom-left";

interface IProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    icon: IconType;
    label: string;
    corner: Corner;
}

const HotCornerButton = (props: IProps) => {
    const { onClick, icon, label, corner } = props;

    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    const isBottom = useMemo(
        () => corner === "bottom-left" || corner === "bottom-right",
        [corner]
    );
    const isRight = useMemo(
        () => corner === "top-right" || corner === "bottom-right",
        [corner]
    );

    const mt = useMemo(() => (isBottom ? 2 : 0), [isBottom]);
    const mr = useMemo(() => (isRight ? 0 : 2), [isRight]);
    const mb = useMemo(() => (isBottom ? 0 : 2), [isBottom]);
    const ml = useMemo(() => (isRight ? 2 : 0), [isRight]);

    const btrr = useMemo(
        () => (!isRight && isBottom ? "full" : "none"),
        [isRight, isBottom]
    );
    const bbrr = useMemo(
        () => (!isRight && !isBottom ? "full" : "none"),
        [isRight, isBottom]
    );
    const bblr = useMemo(
        () => (isRight && !isBottom ? "full" : "none"),
        [isRight, isBottom]
    );
    const btlr = useMemo(
        () => (isRight && isBottom ? "full" : "none"),
        [isRight, isBottom]
    );

    return (
        <Box
            position="fixed"
            top={mb === 0 ? undefined : mb}
            right={ml === 0 ? undefined : ml}
            bottom={mt === 0 ? undefined : mt}
            left={mr === 0 ? undefined : mr}
        >
            <IconButton
                opacity={isHovered ? "100%" : "33%"}
                variant="ghost"
                onClick={onClick}
                icon={<Icon as={icon} mt={mt} mr={mr} mb={mb} ml={ml} />}
                aria-label={label}
                borderTopRightRadius={btrr}
                borderBottomRightRadius={bbrr}
                borderBottomLeftRadius={bblr}
                borderTopLeftRadius={btlr}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </Box>
    );
};

export default HotCornerButton;
