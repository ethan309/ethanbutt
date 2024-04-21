export interface ISitePage {
    element: React.ReactNode;
    link: string;
    sidebarLabel?: string;
}

type SkillType = "technical" | "management" | "design" | "other";
type SkillFamiliarity = "proficient" | "familiar" | "exposed";

export interface ISkill {
    label: string;
    type?: SkillType;
    familiarity?: SkillFamiliarity;
}
