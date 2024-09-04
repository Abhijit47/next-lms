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

declare type Courses = Course[];

declare type Testimonial = {
  id: string;
  name: string;
  role: string;
  image: string;
  message: string;
};

declare type Testimonials = Testimonial[];
