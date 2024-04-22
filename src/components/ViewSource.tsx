import { useCallback } from "react";
import { useExternalNavigate } from "../api/use-external-navigate";
import { VscSourceControl } from "react-icons/vsc";
import HotCornerButton from "./HotCornerButton";

const link = "https://github.com/ethan309/ethanbutt";

const ViewSource = () => {
    const navigate = useExternalNavigate();
    const onClick = useCallback(() => navigate(link), [navigate]);

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
