import React from "react";
import {
  WrapperSkills,
  Title,
  SkillList,
  SkillInfos,
  SkillName,
  SkillDescription
} from "./styles";
import { SkillsSectionProps } from "./interface";

const SkillsSection = ({ title, children, nameSkill, descriptionSkill }: SkillsSectionProps) => {
  return (
    <WrapperSkills>
      <Title>{title}</Title>
      <SkillList>
        {children}
      </SkillList>
      <SkillInfos>
        <SkillName>{nameSkill}</SkillName>
        <SkillDescription>{descriptionSkill}</SkillDescription>
      </SkillInfos>
    </WrapperSkills>
  )
}

export default SkillsSection;