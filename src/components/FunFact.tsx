import { Heading, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface IProps {
    heading?: string;
    subheading?: string;
    fact: string | ReactElement;
    link?: string;
}

const FunFact = (props: IProps) => {
    const { heading = "Fun Fact", subheading, fact, link } = props;

    return (
        <Stack align="start">
            <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="baseline"
            >
                <Heading>{heading}</Heading>
                {subheading && (
                    <Text fontSize="sm" as="i">
                        {subheading}
                    </Text>
                )}
            </HStack>
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
