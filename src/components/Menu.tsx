import { BiHomeCircle, BiNavigation } from "react-icons/bi";
import HotCornerButton from "./HotCornerButton";
import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { FaPage4 } from "react-icons/fa";

interface IProps {
    isHotCorner?: boolean;
}

const SiteMenu = (props: IProps) => {
    return (
        <Menu>
            {props.isHotCorner ? (
                <MenuButton
                    corner="top-left"
                    as={HotCornerButton}
                    label="Site menu"
                    icon={BiNavigation}
                />
            ) : (
                <MenuButton
                    as={IconButton}
                    aria-label="Site menu"
                    icon={<BiNavigation />}
                    variant="outline"
                />
            )}
            <MenuList>
                <MenuItem icon={<BiHomeCircle />}>Home</MenuItem>
                <MenuItem icon={<FaPage4 />}>Another Page</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SiteMenu;
