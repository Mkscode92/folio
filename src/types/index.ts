export interface Project {
  id: string;
  title: string;
  description: string;
  category: "AI" | "Web" | "Finance" | "Other";
  tags: string[];
  image?: string;
  github?: string;
  website?: string;
  devpost?: string;
}

export interface Certificate { 
    id: string;
    title: string 
    image: string;
    link: string; 
}