import { useCallback } from "react";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TbHome } from "react-icons/tb";

const NotFound = () => {
    const navigate = useNavigate();
    const onGoHome = useCallback(() => navigate("/"), [navigate]);

    console.log("Not Found");

    return (
        <VStack spacing={8} mt={5} align="center">
            <Heading size="4xl">Hmmm</Heading>
            <Text>We didn't find that page.</Text>
            <Button onClick={onGoHome} leftIcon={<TbHome />}>
                Home
            </Button>
        </VStack>
    );
};

export default NotFound;
