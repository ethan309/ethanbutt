import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
    heading?: string;
    fact: string;
    link?: string;
}

const FunFact = (props: IProps) => {
    const { heading = "Fun Fact", fact, link } = props;

    return (
        <Stack align="start">
            <Heading>{heading}</Heading>
            <Text textAlign="start">
                {fact}{" "}
                <Link href={link} isExternal>
                    Learn More
                </Link>
            </Text>
        </Stack>
    );
};

export default FunFact;
