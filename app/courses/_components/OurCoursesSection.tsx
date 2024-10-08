import SectionWrapper from "@/app/_components/SectionWrapper";
import Image from "next/image";
import Link from "next/link";

import courses from "@/data/courses.json";

export default async function OurCoursesSection() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section className="body-font text-gray-600">
      <SectionWrapper className="px-5 pt-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Discover Our Top Courses and Elevate Your Learning
            </h1>
            <div className="h-1 w-20 rounded bg-purple-500"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            Unlock your potential with our expertly crafted courses, designed by
            industry professionals to help you thrive. Learn at your own pace
            and earn certifications upon completion. Explore a diverse range of
            subjects, including business, technology, and design, tailored to
            meet your aspirations. Our courses are your gateway to achieving
            your dreams and reaching new heights.{" "}
            <span className="font-semibold text-orange-400">
              Begin your learning journey today!
            </span>
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {courses.map((course) => (
            <div key={course.id} className="p-4 md:w-1/2 xl:w-1/4">
              <div className="rounded-lg bg-gray-100 p-6">
                <Image
                  className="mb-6 h-40 w-full rounded object-contain object-center"
                  // src="https://dummyimage.com/720x400"
                  src={course.courseImage}
                  alt="content"
                  width={720}
                  height={400}
                />
                <h3 className="title-font text-xs font-medium tracking-widest text-purple-500">
                  SUBTITLE
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  {course.title}
                </h2>
                <p className="line-clamp-4 text-base leading-relaxed">
                  {course.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/courses/${course.id}`}
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
  );
}
