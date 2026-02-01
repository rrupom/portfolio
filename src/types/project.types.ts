export type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
};

export type Projects = Project[];
