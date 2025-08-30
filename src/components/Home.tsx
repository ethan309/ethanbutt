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
import FunFact from "./FunFact";

const Home = () => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <VStack spacing={8} my={4}>
            <VisuallyHidden>
                <Heading size="4xl">Ethan Bütt</Heading>
            </VisuallyHidden>
            <Flex
                mt={4}
                flexDir={isSmallScreen ? "column" : "row"}
                w={["98%", "98%", "92%", "96%", "85%"]}
                columnGap="2rem"
                justifyContent="center"
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
                    <SectionTile fadeInDelay={80}>
                        <FunFact
                            heading="A Novel Idea"
                            subheading="Jan 2021 - Jan 2022"
                            fact="In my final year of undergraduate study, I worked with a small team of friends to create an inventory management and point-of-sale system for a local bookstore, with a goal of improving their inventory management and checkout efficiency. We created this website using React and MongoDB."
                            link="https://anovelideabookstore.com"
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
                    <Spacer minH={8} />
                </Box>
            </Flex>
            <Footer />
        </VStack>
    );
};

export default Home;
