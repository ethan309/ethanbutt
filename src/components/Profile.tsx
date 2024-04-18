import { Image, Text, VStack, Wrap, WrapItem, Link } from "@chakra-ui/react";
import { Images } from "../images";
import ProfileLink from "./ProfileLink";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { emailAddress } from "../constants";

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
            <Text textAlign="start">
                2021 graduate from University of Nebraska - Lincoln; obtained
                Bachelor's of Science in Software Engineering with a minor in
                Mathematics.
            </Text>
            <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
            <Wrap>
                <WrapItem>
                    <ProfileLink
                        Icon={FaGithubSquare}
                        iconColor="#24292E"
                        link="https://github.com/ethan309"
                        label="GitHub"
                        isLabelHidden
                    />
                </WrapItem>
                <WrapItem>
                    <ProfileLink
                        Icon={FaLinkedin}
                        iconColor="#0077B5"
                        link="http://www.linkedin.com/in/ethan-d-butt"
                        label="LinkedIn"
                        isLabelHidden
                    />
                </WrapItem>
                <WrapItem>
                    <ProfileLink
                        Icon={SiApplemusic}
                        iconColor="#FC3C44"
                        link="https://music.apple.com/profile/ethan10243"
                        label="Apple Music"
                        isLabelHidden
                    />
                </WrapItem>
                <WrapItem>
                    <ProfileLink
                        Icon={FaFacebookSquare}
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
