import {
    Heading,
    List,
    Stack,
    Text,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";
import WorkExperience from "./WorkExperience";
import { Images } from "../images";

const WorkExperiences = () => {
    const FlywheelLogo = useColorModeValue(
        Images.FlywheelLogoBanner,
        Images.FlywheelLogoBannerBlue
    );

    return (
        <Stack>
            <Heading mb={2}>Some Places I've Worked</Heading>
            <List spacing={10}>
                <WorkExperience
                    companyName="Epic"
                    companyLogoPath={Images.EpicLogo}
                    companyLink="https://www.epic.com"
                    position="Patient Experience Software Developer, Team Lead"
                    timeframe="Jul 2021 - Present"
                    Description={
                        <Text>
                            Professionally grow team of developers, speak on
                            product vision with healthcare organizations to
                            improve inpatient outcomes, and prioritize project
                            plans for{" "}
                            <Link
                                href="https://www.epic.com/software/patient-experience"
                                isExternal
                            >
                                MyChart Bedside
                            </Link>
                            . Lead{" "}
                            <Link
                                href="https://www.epic.com/epicalmanac/archive/2025-2026"
                                isExternal
                            >
                                Bedside TV platform launch
                            </Link>
                            , allowing hospital patients to access their health
                            data on footwall TVs. Improve development processes,
                            troubleshoot internal development issues, and
                            conduct code reviews as Git and React expert.
                        </Text>
                    }
                />
                <WorkExperience
                    companyName="Flywheel"
                    companyLogoPath={FlywheelLogo}
                    companyLogoWidth="12rem"
                    companyLink="https://getflywheel.com"
                    position="Software Engineer Intern: Local Core Team"
                    timeframe="May 2020 - Aug 2020"
                    Description={
                        <Text>
                            Maintained and added new features to{" "}
                            <Link href="https://localwp.com" isExternal>
                                Local
                            </Link>
                            , an application used by web developers to create
                            WordPress sites. Accelerated developer workflow by
                            creating a terminal-based generator for Local
                            add-ons, which was{" "}
                            <Link
                                href="https://www.npmjs.com/package/create-local-addon"
                                isExternal
                            >
                                published to NPM
                            </Link>
                            .
                        </Text>
                    }
                />
                <WorkExperience
                    companyName="Southwest Business Corporation"
                    companyLogoPath={Images.SwbcLogo}
                    isNamePrintedToo
                    companyLink="https://www.swbc.com"
                    position="Development Intern: Cloud and Innovation Team"
                    timeframe="May 2019 - Aug 2019"
                    Description={
                        <Text>
                            Increased workflow efficiency by implementing
                            automated processes used to supplement employee
                            activities. Involved in research, assessment, and
                            development of software in areas of automation and
                            machine learning.
                        </Text>
                    }
                />
            </List>
        </Stack>
    );
};

export default WorkExperiences;
