import { useCallback } from "react";
import { useExternalNavigate } from "../api/use-external-navigate";
import { VscSourceControl } from "react-icons/vsc";
import HotCornerButton from "./HotCornerButton";
import { Icon, IconButton } from "@chakra-ui/react";

const link = "https://github.com/ethan309/ethanbutt";

interface IProps {
    isHotCorner?: boolean;
}

const ViewSource = (props: IProps) => {
    const navigate = useExternalNavigate();
    const onClick = useCallback(() => navigate(link), [navigate]);

    if (!props.isHotCorner) {
        return (
            <IconButton
                onClick={onClick}
                icon={<Icon as={VscSourceControl} />}
                aria-label="View website source"
            />
        );
    }

    return (
        <HotCornerButton
            corner="bottom-right"
            onClick={onClick}
            icon={VscSourceControl}
            label="View website source"
        />
    );
};

export default ViewSource;
