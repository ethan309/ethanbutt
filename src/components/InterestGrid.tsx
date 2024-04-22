import { Heading, Stack } from "@chakra-ui/react";
import { CgWebsite } from "react-icons/cg";
import { TbAugmentedReality } from "react-icons/tb";
import { LuProjector } from "react-icons/lu";
import { CiStopwatch } from "react-icons/ci";
import ItemGrid from "./ItemGrid";

const iterests = [
    { icon: CgWebsite, label: "Front-end Web Development Frameworks" },
    { icon: LuProjector, label: "Audio/Video Work" },
    { icon: CiStopwatch, label: "Project Estimation Strategies" },
    { icon: TbAugmentedReality, label: "Augmented Reality" },
];

const InterestGrid = () => {
    return (
        <Stack>
            <Heading mb={2}>Some Areas that Interest Me</Heading>
            <ItemGrid items={iterests} />
        </Stack>
    );
};

export default InterestGrid;
