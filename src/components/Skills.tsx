import React from "react";
import Skill from "./Skill";
import SkillsCloud from "./SkillsCloud";

const Skills = () => {
    return (
        <SkillsCloud>
            <Skill label="JavaScript" type="technical" />
            <Skill label="TypeScript" type="technical" />
            <Skill label="React" type="technical" />
            <Skill label="Git" type="technical" />
            <Skill label="Node.js" type="technical" />
            <Skill label="Python" type="technical" />
            <Skill label="Swift" type="technical" />
            <Skill label="Java" type="technical" />
            <Skill label="MongoDB Atlas" type="technical" />
            <Skill label="web development" type="technical" />
            <Skill label="software testing" type="technical" />
            <Skill label="Bash" type="technical" />
            <Skill label="UiPath" type="technical" />
            <Skill label="MySQL" type="technical" familiarity="familiar" />
            <Skill label="C" type="technical" familiarity="exposed" />
            <Skill label="C++" type="technical" familiarity="familiar" />
            <Skill label="Vue" type="technical" familiarity="exposed" />
            <Skill label="Haskell" type="technical" familiarity="exposed" />
            <Skill
                label="Unity (SteamVR)"
                type="technical"
                familiarity="exposed"
            />
            <Skill label="UX design" type="design" />
            <Skill label="human-computer interaction" type="design" />
            <Skill label="Adobe XD" type="design" />
            <Skill label="Figma" type="design" />
            <Skill
                label="Adobe Photoshop"
                type="design"
                familiarity="familiar"
            />
            <Skill label="Cinema 4D" type="design" familiarity="familiar" />
            <Skill label="Scrum" />
            <Skill label="agile development" />
            <Skill label="JIRA" familiarity="familiar" />
        </SkillsCloud>
    );
};

export default Skills;
