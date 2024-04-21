import { Tag, WrapItem } from "@chakra-ui/react";
import { useMemo } from "react";
import { ISkill } from "../types";

interface IProps extends ISkill {}

const Skill = (props: IProps) => {
    const { label, type = "other", familiarity = "proficient" } = props;

    const color = useMemo(() => {
        switch (type) {
            case "technical":
                return "blue";
            case "management":
                return "green";
            case "design":
                return "yellow";
            default:
                return "gray";
        }
    }, [type]);

    if (familiarity === "exposed") {
        return null;
    }

    return (
        <WrapItem>
            <Tag
                variant={familiarity === "familiar" ? "outline" : "solid"}
                opacity={familiarity === "familiar" ? "50%" : "100%"}
                colorScheme={color}
                userSelect="all"
            >
                {label}
            </Tag>
        </WrapItem>
    );
};

export default Skill;
