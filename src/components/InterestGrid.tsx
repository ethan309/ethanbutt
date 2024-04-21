import { Heading, Stack } from "@chakra-ui/react";
import { CgWebsite } from "react-icons/cg";
import { TbAugmentedReality, TbChartBubble } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import ItemGrid from "./ItemGrid";

const iterests = [
    { icon: CgWebsite, label: "Front-end Web Development Frameworks" },
    { icon: TbChartBubble, label: "UX Design" },
    { icon: IoPhonePortraitOutline, label: "Mobile Application Design" },
    { icon: TbAugmentedReality, label: "Augmented Reality" },
];

const InterestGrid = () => {
    return (
        <Stack>
            <Heading mb={2}>A Few Areas that Interest Me</Heading>
            <ItemGrid items={iterests} />
        </Stack>
    );
};

export default InterestGrid;
