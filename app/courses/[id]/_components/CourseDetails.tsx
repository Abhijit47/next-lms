import SectionWrapper from "@/app/_components/SectionWrapper";
import Image from "next/image";

export default function CourseDetails({ course }: { course: Course }) {
  return (
    <section className="body-font text-gray-600">
      <SectionWrapper className="flex flex-col px-5 py-24">
        <div className="space-y-8">
          <div className="aspect-[26/9] overflow-hidden rounded-lg">
            <Image
              alt="content"
              className="h-full w-full object-cover object-center"
              // src="https://dummyimage.com/1200x500"
              src={course.courseCovers[0]}
              width={1200}
              height={500}
              priority
              // loader={({ src }) => src}
            />
          </div>
          <div className={"flex w-full justify-center"}>
            <h1>
              <span className="text-3xl font-medium text-gray-900">
                {course.title}
              </span>
            </h1>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <Image
                  alt="content"
                  className="h-full w-full rounded-full object-cover object-center"
                  // src="https://dummyimage.com/1200x500"
                  src={course.instructor.avatar}
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  {course.instructor.name}
                </h2>
                <p>
                  <span className="text-gray-600">
                    {course.instructor.role}
                  </span>
                </p>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-purple-500"></div>
                <p className="text-base">{course.instructor.bio}</p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <h4>
                <span className="text-2xl font-medium text-gray-900">
                  Course Description
                </span>
              </h4>
              <p className="my-4 text-lg leading-relaxed">
                {course.description}
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                  <span>Enroll Now</span>
                  <span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
