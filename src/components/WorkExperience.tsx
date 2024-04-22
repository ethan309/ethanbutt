import React, { useMemo } from "react";
import { HStack, Heading, Stack, Text, Link } from "@chakra-ui/react";

interface IProps {
    CompanyLogo?: React.ReactNode;
    companyName?: string;
    companyLink?: string;
    position: string;
    Description: React.ReactNode;
}

const WorkExperience = (props: IProps) => {
    const { CompanyLogo, companyName, companyLink, position, Description } =
        props;

    const CompanyTitleLine = useMemo(() => {
        if (CompanyLogo) {
            return companyName ? (
                <HStack>
                    {CompanyLogo}
                    <Heading size="lg">{companyName}</Heading>
                </HStack>
            ) : (
                CompanyLogo
            );
        }
        return companyName ? <Heading size="lg">{companyName}</Heading> : null;
    }, [CompanyLogo, companyName]);

    return (
        <Stack>
            {companyLink ? (
                <Link href={companyLink} isExternal textDecoration="none">
                    {CompanyTitleLine}
                </Link>
            ) : (
                CompanyTitleLine
            )}
            <Text as="i">{position}</Text>
            {Description}
        </Stack>
    );
};

export default WorkExperience;
