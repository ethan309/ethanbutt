import { Button } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { HiOutlineDocument } from "react-icons/hi";
import { useExternalNavigate } from "../api/use-external-navigate";

interface IProps {
    label?: string;
}

const ViewResumeButton = (props: IProps) => {
    const { label = "View Resume" } = props;

    const navigate = useExternalNavigate();
    const onClick = useCallback(() => navigate("./A4.pdf"), [navigate]);

    return (
        <Button
            variant="link"
            leftIcon={<HiOutlineDocument />}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default ViewResumeButton;
