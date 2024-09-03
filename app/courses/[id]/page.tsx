import LearningStepSection from "../_components/LearningStepSection";
import TestimonialSection from "../_components/TestimonialSection";
import CourseCurricullam from "./_components/CourseCurricullam";
import CourseDetails from "./_components/CourseDetails";

import courses from "@/data/courses.json";

export const dynamicParams = true; // true | false,

export default async function CoursePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  const { id } = params;

  const course: Course | undefined = courses.find((course) => course.id === id);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!course) {
    return (
      <main>
        <h1>Course not found</h1>
      </main>
    );
  }

  // artificially slow down the response to simulate a slow network

  return (
    <main>
      <CourseDetails course={course} />
      <CourseCurricullam course={course} />
      <LearningStepSection />
      <TestimonialSection />
    </main>
  );
}
