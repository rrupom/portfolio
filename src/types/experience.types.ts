export type Work = {
  id: number;
  title: string;
};

export type WorkExperience = {
  id: number;
  time: string;
  title: string;
  company: string;
  works: Work[];
  technologies: string[];
};
