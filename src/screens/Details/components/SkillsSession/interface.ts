import React from "react";

export interface SkillsSectionProps {
  title: string;
  nameSkill: string | undefined;
  descriptionSkill: string | undefined;
  children: React.ReactNode;
}
