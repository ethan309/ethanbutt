import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const InterestGrid = () => {
    return (
        <Stack>
            <Heading size="xl" mb={6}>
                A Few Areas that Interest Me
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                <Text>Augmented Reality</Text>
                <Text>UX Design</Text>
                <Text>Front-end Web Development Frameworks</Text>
                <Text>Mobile Application Design</Text>
            </SimpleGrid>
        </Stack>
    );
};

export default InterestGrid;
