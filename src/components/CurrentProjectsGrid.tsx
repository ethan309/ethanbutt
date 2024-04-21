import { Heading, Stack } from "@chakra-ui/react";
import { VscServerProcess } from "react-icons/vsc";
import { LuPodcast } from "react-icons/lu";
import { IoCard, IoPencil } from "react-icons/io5";
import ItemGrid from "./ItemGrid";

const iterests = [
    { icon: VscServerProcess, label: "Server Hosting" },
    { icon: LuPodcast, label: "Audio Editing" },
    { icon: IoCard, label: "Payment Processing" },
    { icon: IoPencil, label: "Digital Handwriting and Annotation" },
];

const CurrentProjectsGrid = () => {
    return (
        <Stack>
            <Heading mb={2}>What I'm Learning About Right Now</Heading>
            <ItemGrid items={iterests} />
        </Stack>
    );
};

export default CurrentProjectsGrid;
