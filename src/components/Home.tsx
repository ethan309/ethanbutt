import {
    Box,
    Center,
    Flex,
    Heading,
    Spacer,
    VStack,
    VisuallyHidden,
} from "@chakra-ui/react";
import Profile from "./Profile";
import { useIsSmallScreen } from "../api/use-is-small-screen";
import Basics from "./Basics";
import InterestGrid from "./InterestGrid";
import WorkExperiences from "./WorkExperiences";
import Footer from "./Footer";
import CurrentProjectsGrid from "./CurrentProjectsGrid";
import ViewResumeButton from "./ViewResumeButton";
import Skills from "./Skills";
import SectionTile from "./SectionTile";
import ThemeToggle from "./ThemeToggle";
import FunFact from "./FunFact";

const Home = () => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <VStack spacing={8} my={4} pos="relative">
            <Box position="fixed" top={2} right={2}>
                <ThemeToggle />
            </Box>
            <VisuallyHidden>
                <Heading size="4xl">Ethan Bütt</Heading>
            </VisuallyHidden>
            <Flex
                mt={4}
                flexDir={isSmallScreen ? "column" : "row"}
                w="85%"
                columnGap="2rem"
                justifyContent="center"
                pos="relative"
            >
                <Box flex="1 1 30%">
                    <SectionTile>
                        <Profile />
                    </SectionTile>
                    <Spacer minH={8} />
                    <SectionTile fadeInDelay={60}>
                        <Skills />
                    </SectionTile>
                    <Spacer minH={8} />
                    <SectionTile fadeInDelay={70}>
                        <Center>
                            <ViewResumeButton />
                        </Center>
                    </SectionTile>
                    <Spacer minH={8} />
                    <SectionTile fadeInDelay={80}>
                        <FunFact
                            heading="My Claim to Fame"
                            fact="I am featured in the App Store screenshots for the iOS music sharing app Sonar."
                            link="https://apps.apple.com/us/app/sonar-music-community/id1626147292"
                        />
                    </SectionTile>
                    <Spacer minH={8} />
                </Box>
                <Box flex="2 2 60%" textAlign="start">
                    <SectionTile fadeInDelay={40}>
                        <Basics />
                    </SectionTile>
                    <Spacer minH={8} />
                    <SectionTile fadeInDelay={60}>
                        <InterestGrid />
                        <Spacer minH={8} />
                        <CurrentProjectsGrid />
                        <Spacer minH={8} />
                        <WorkExperiences />
                    </SectionTile>
                </Box>
            </Flex>
            <Footer />
        </VStack>
    );
};

export default Home;
