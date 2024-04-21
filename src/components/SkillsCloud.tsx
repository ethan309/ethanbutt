import React from "react";
import { Heading, Stack, Wrap } from "@chakra-ui/react";

interface IProps {
    children: React.ReactNode;
}

const SkillsCloud = (props: IProps) => {
    const { children } = props;

    return (
        <Stack align="start">
            <Heading>Skills</Heading>
            <Wrap>{children}</Wrap>
        </Stack>
    );
};

export default SkillsCloud;
