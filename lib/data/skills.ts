export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  { category: "Languages", items: ["Python", "TypeScript", "C++", "SQL"] },
  { category: "AI / ML", items: ["PyTorch", "Hugging Face", "scikit-learn", "LangChain"] },
  { category: "Web / Systems", items: ["Next.js", "Node.js", "Docker", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Linux", "Weights & Biases", "Figma"] },
];
