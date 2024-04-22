import {
    Image,
    Text,
    VStack,
    Wrap,
    WrapItem,
    Link,
    HStack,
    Heading,
    Icon,
} from "@chakra-ui/react";
import { Images } from "../images";
import ProfileLink from "./ProfileLink";
import { emailAddress } from "../constants";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

const Profile = () => {
    return (
        <VStack rowGap={10}>
            <Image
                src={Images.SquareProfile}
                borderRadius="full"
                fit="cover"
                aspectRatio={1}
                alignSelf="center"
                maxW="80%"
            />
            <Heading>Ethan Bütt</Heading>
            <Text>
                2021 graduate from University of Nebraska - Lincoln; obtained
                Bachelor's of Science in Software Engineering with a minor in
                Mathematics.
            </Text>
            <Wrap justify="center">
                <WrapItem>
                    <HStack>
                        <Icon as={LuMail} />
                        <Text as="b">Want to chat?</Text>
                    </HStack>
                </WrapItem>
                <Wrap>
                    <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
                </Wrap>
            </Wrap>
            <Wrap justify="center">
                <WrapItem columnGap={2}>
                    <ProfileLink
                        icon={FaGithub}
                        iconColor="#24292E"
                        link="https://github.com/ethan309"
                        label="GitHub"
                        isLabelHidden
                    />
                    <ProfileLink
                        icon={FaLinkedinIn}
                        iconColor="#0077B5"
                        link="http://www.linkedin.com/in/ethan-d-butt"
                        label="LinkedIn"
                        isLabelHidden
                    />
                </WrapItem>
                <WrapItem columnGap={2}>
                    <ProfileLink
                        icon={IoMusicalNotes}
                        iconColor="#FC3C44"
                        link="https://music.apple.com/profile/ethan10243"
                        label="Apple Music"
                        isLabelHidden
                    />
                    <ProfileLink
                        icon={FaFacebookF}
                        iconColor="#1877F2"
                        link="https://www.facebook.com/ethan10243"
                        label="Facebook"
                        isLabelHidden
                    />
                </WrapItem>
            </Wrap>
        </VStack>
    );
};

export default Profile;
