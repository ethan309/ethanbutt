import { Box, Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import Profile from "./Profile";
import { useIsSmallScreen } from "../api/use-is-small-screen";
import Basics from "./Basics";
import InterestGrid from "./InterestGrid";
import WorkExperiences from "./WorkExperiences";
import Footer from "./Footer";

const Home = () => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <VStack spacing={8} my={4} align="center">
            <Heading size="4xl">Ethan Bütt</Heading>
            <Flex
                mt={4}
                flexDir={isSmallScreen ? "column" : "row"}
                w="85%"
                columnGap="2rem"
                justifyContent="center"
            >
                <Box flex="1 1 30%">
                    <Profile />
                </Box>
                <Box flex="2 2 60%" textAlign="start">
                    <Basics />
                    <Spacer minH={10} />
                    <InterestGrid />
                    <Spacer minH={10} />
                    <WorkExperiences />
                </Box>
            </Flex>
            <Footer />
        </VStack>
    );
};

export default Home;
