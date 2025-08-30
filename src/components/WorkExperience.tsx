import React, { useMemo } from "react";
import { HStack, Heading, Stack, Text, Link, Image } from "@chakra-ui/react";

interface IProps {
    companyLogoPath?: string;
    companyLogoWidth?: string | number;
    companyName: string;
    isNamePrintedToo?: boolean;
    companyLink?: string;
    timeframe?: string;
    position: string;
    Description: React.ReactNode;
}

const WorkExperience = (props: IProps) => {
    const {
        companyLogoPath,
        companyLogoWidth = "5rem",
        companyName,
        isNamePrintedToo,
        companyLink,
        timeframe,
        position,
        Description,
    } = props;

    const CompanyTitle = useMemo(() => {
        const TitleHeading = <Heading size="lg">{companyName}</Heading>;

        if (!companyLogoPath) {
            return TitleHeading;
        }

        const CompanyLogo = (
            <Image
                maxW={companyLogoWidth}
                src={companyLogoPath}
                _hover={{ transform: companyLink ? "scale(1.05)" : undefined }}
                aria-description={`${companyName} company logo`}
            />
        );

        return isNamePrintedToo ? (
            <HStack>
                {CompanyLogo}
                <Heading size="lg">{companyName}</Heading>
            </HStack>
        ) : (
            CompanyLogo
        );
    }, [
        companyName,
        companyLogoPath,
        companyLogoWidth,
        companyLink,
        isNamePrintedToo,
    ]);

    const CompanyTitleLine = useMemo(
        () =>
            companyLink ? (
                <Link href={companyLink} isExternal textDecoration="none">
                    {CompanyTitle}
                </Link>
            ) : (
                CompanyTitle
            ),
        [CompanyTitle, companyLink]
    );

    return (
        <Stack>
            <HStack justifyContent="space-between">
                {CompanyTitleLine}
                <Text fontSize="sm" as="i" textAlign="end">
                    {timeframe}
                </Text>
            </HStack>
            <Text as="i">{position}</Text>
            {Description}
        </Stack>
    );
};

export default WorkExperience;
