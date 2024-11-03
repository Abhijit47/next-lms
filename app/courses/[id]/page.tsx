import { currentUser } from "@clerk/nextjs/server";

import LearningStepSection from "../_components/LearningStepSection";
import TestimonialSection from "../_components/TestimonialSection";
import CourseCurricullam from "./_components/CourseCurricullam";
import CourseDetails from "./_components/CourseDetails";

import SectionWrapper from "@/app/_components/SectionWrapper";
import courses from "@/data/courses.json";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";

export const dynamicParams = true; // true | false,

export default async function CoursePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in", RedirectType.replace);
  }

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

      <section>
        <SectionWrapper className={"space-y-8"}>
          <h2>
            <span className="text-3xl font-medium text-gray-900">
              Our Related Courses
            </span>
          </h2>
          <div className="-m-4 flex flex-wrap">
            {courses
              .filter((c) => c.id !== course.id)
              .map((c) => (
                <div key={course.id} className="p-4 md:w-1/2 xl:w-1/4">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <Image
                      className="mb-6 h-40 w-full rounded object-contain object-center"
                      // src="https://dummyimage.com/720x400"
                      src={c.courseImage}
                      alt="content"
                      width={720}
                      height={400}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-purple-500">
                      SUBTITLE
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      {c.title}
                    </h2>
                    <p className="line-clamp-4 text-base leading-relaxed">
                      {c.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={`/courses/${c.id}`}
                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </SectionWrapper>
      </section>
      <TestimonialSection />
    </main>
  );
}
