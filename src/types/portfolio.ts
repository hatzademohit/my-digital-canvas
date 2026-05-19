export interface Project {
  id: number;
  title: string;
  description: string;
  category: "web" | "tool" | "internal";
  gradient: string;
  tech: string[];
}