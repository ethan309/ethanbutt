import { Button, IconButton } from "@chakra-ui/react";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { useExternalNavigate } from "../api/use-external-navigate";

interface IProps {
    Icon: IconType;
    iconColor: string;
    link: string;
    label: string;
    isLabelHidden?: boolean;
}

const ProfileLink = (props: IProps) => {
    const { Icon, iconColor, link, label, isLabelHidden = false } = props;

    const navigate = useExternalNavigate();
    const onClick = useCallback(() => navigate(link), [navigate, link]);

    return isLabelHidden ? (
        <IconButton
            onClick={onClick}
            icon={<Icon color={iconColor} />}
            aria-label={label}
        />
    ) : (
        <Button onClick={onClick} leftIcon={<Icon color={iconColor} />}>
            {label}
        </Button>
    );
};

export default ProfileLink;
