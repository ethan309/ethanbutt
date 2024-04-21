import { Heading, Stack, Text, Link } from "@chakra-ui/react";

const Basics = () => {
    return (
        <Stack>
            <Heading>Hey</Heading>
            <Text mb={6}>
                I am a software engineer at{" "}
                <Link href="https://www.epic.com" isExternal>
                    Epic
                </Link>
                . I have{" "}
                <Link
                    href="https://computing.unl.edu/software-engineering"
                    isExternal
                >
                    a degree in Software Engineering from the University of
                    Nebraska - Lincoln
                </Link>
                . I was blessed with the opportunity to engage in a number of
                research projects and internships during my undergraduate
                career. These experiences showed me that I am drawn to the
                design aspect of software development — creating intentional and
                intuitive interfaces and interactions for users.
            </Text>
            <Text>
                Outside work, I enjoy messing around with Photoshop, discovering
                new music, and collecting unique card and board games.
            </Text>
        </Stack>
    );
};

export default Basics;
