import { Button, Icon, IconButton } from "@chakra-ui/react";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { useExternalNavigate } from "../api/use-external-navigate";

interface IProps {
    icon: IconType;
    iconColor: string;
    link: string;
    label: string;
    isLabelHidden?: boolean;
}

const ProfileLink = (props: IProps) => {
    const { icon, iconColor, link, label, isLabelHidden = false } = props;

    const navigate = useExternalNavigate();
    const onClick = useCallback(() => navigate(link), [navigate, link]);

    return isLabelHidden ? (
        <IconButton
            size="lg"
            onClick={onClick}
            icon={<Icon as={icon} boxSize="60%" color={iconColor} />}
            aria-label={label}
        />
    ) : (
        <Button
            size="lg"
            onClick={onClick}
            leftIcon={<Icon as={icon} color={iconColor} />}
        >
            {label}
        </Button>
    );
};

export default ProfileLink;
