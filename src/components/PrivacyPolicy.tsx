import { useCallback } from "react";
import { useExternalNavigate } from "../api/use-external-navigate";
import { MdPolicy } from "react-icons/md";
import HotCornerButton from "./HotCornerButton";

const link =
    "https://www.freeprivacypolicy.com/live/8eaf8c25-918c-421f-8a68-7d6919bddcf7";

const PrivacyPolicy = () => {
    const navigate = useExternalNavigate();
    const onClick = useCallback(() => navigate(link), [navigate]);

    return (
        <HotCornerButton
            corner="bottom-left"
            onClick={onClick}
            icon={MdPolicy}
            label="View website privacy policy"
        />
    );
};

export default PrivacyPolicy;
