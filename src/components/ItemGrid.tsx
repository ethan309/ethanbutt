import { HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IItem {
    icon?: IconType;
    label: string;
}

interface IProps {
    items: IItem[];
}

const ItemGrid = (props: IProps) => {
    const { items } = props;

    return (
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
            {items.map(({ icon, label }) => (
                <HStack key={label}>
                    {icon && <Icon as={icon} size={40} />}
                    <Text>{label}</Text>
                </HStack>
            ))}
        </SimpleGrid>
    );
};

export default ItemGrid;
