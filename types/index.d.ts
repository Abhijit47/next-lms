declare interface Course {
  id: string;
  title: string;
  description: string;
  curriculam: {
    id: string;
    title: string;
    description: string;
    duration: string;
  }[];
  courseImage: string;
  courseCovers: string[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
}

declare type Courses = {
  id: string;
  title: string;
  description: string;
  curriculam: {
    id: string;
    title: string;
    description: string;
    duration: string;
  }[];
  courseImage: string;
  courseCovers: string[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
}[];
