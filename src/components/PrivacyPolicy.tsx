import { useCallback } from "react";
import { useExternalNavigate } from "../api/use-external-navigate";
import { MdPolicy } from "react-icons/md";
import HotCornerButton from "./HotCornerButton";
import { Icon, IconButton } from "@chakra-ui/react";

const link =
    "https://www.freeprivacypolicy.com/live/8eaf8c25-918c-421f-8a68-7d6919bddcf7";

interface IProps {
    isHotCorner?: boolean;
}

const PrivacyPolicy = (props: IProps) => {
    const navigate = useExternalNavigate();
    const onClick = useCallback(() => navigate(link), [navigate]);

    if (!props.isHotCorner) {
        return (
            <IconButton
                onClick={onClick}
                icon={<Icon as={MdPolicy} />}
                aria-label="View website privacy policy"
            />
        );
    }

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
