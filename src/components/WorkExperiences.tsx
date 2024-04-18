import { Heading, List, Stack, Text, Link, Image } from "@chakra-ui/react";
import React from "react";
import WorkExperience from "./WorkExperience";
import { Images } from "../images";

const WorkExperiences = () => {
    return (
        <Stack>
            <Heading size="xl" mb={6}>
                Some Places I've Worked
            </Heading>
            <List spacing={10}>
                <WorkExperience
                    // companyName="Flywheel"
                    CompanyLogo={
                        <Image maxW="12rem" src={Images.FlywheelLogoBanner} />
                    }
                    companyLink="https://getflywheel.com"
                    position="Software Engineer Intern: Local Core Team"
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
                    CompanyLogo={<Image maxW="5rem" src={Images.SwbcLogo} />}
                    companyLink="https://www.swbc.com"
                    position="Development Intern: Cloud and Innovation Team"
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
