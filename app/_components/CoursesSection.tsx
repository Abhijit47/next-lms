import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

import courses from "../../data/courses.json";

// const courses = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(import("../../data/courses.json"));
//   }, 2000);
// }).then((data) => {
//   console.log(data);
//   return data;
// });

// console.log(courses);

export default function CoursesSection() {
  return (
    <section className="body-font text-gray-600">
      <SectionWrapper className="px-5 pb-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Explore Our Diverse Courses and Programs
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover a diverse array of courses and programs tailored to help
            you achieve your aspirations. Our expertly crafted courses span
            various subjects, including business, technology, and design,
            ensuring you gain the skills and knowledge needed to excel. Whether
            you&apos;re embarking on a new career path, advancing in your
            current field, or simply exploring new interests, we have the
            perfect course or program for you.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {courses.slice(0, 6).map((course) => (
            <div key={course.id} className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="relative flex">
                <Image
                  alt={course.title}
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  // src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  src={course.courseImage}
                  width={600}
                  height={360}
                />
                <div className="hover:scale-120 relative z-10 w-full rounded-lg border-4 border-gray-200 bg-white px-8 py-10 opacity-0 transition-all delay-150 duration-150 ease-out hover:translate-x-1 hover:opacity-100">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-purple-500">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    {course.title}
                  </h1>
                  <p className="leading-relaxed">
                    {course.description.substring(0, 100)}...
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
            </div>
          ))}
          {/* <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 h-full w-full object-contain object-center"
                // src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/assets/svgs/html.svg"
                width={600}
                height={360}
              />
              <div className="hover:scale-120 relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
                <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-purple-500">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="mt-6">
                  <Link
                    href={"#"}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 h-full w-full object-contain object-center"
                // src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/assets/svgs/css.svg"
                width={601}
                height={361}
              />
              <div className="relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
                <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-purple-500">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="mt-6">
                  <Link
                    href={"#"}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 h-full w-full object-contain object-center"
                // src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/assets/svgs/javascript.svg"
                width={603}
                height={363}
              />
              <div className="relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
                <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-purple-500">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  The 400 Blows
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="mt-6">
                  <Link
                    href={"#"}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 h-full w-full object-contain object-center"
                // src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/assets/svgs/react.svg"
                width={602}
                height={362}
              />
              <div className="relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
                <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-purple-500">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Neptune
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="mt-6">
                  <Link
                    href={"#"}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 h-full w-full object-contain object-center"
                // src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/assets/svgs/nodejs.svg"
                width={605}
                height={365}
              />
              <div className="relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
                <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-purple-500">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Holden Caulfield
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="mt-6">
                  <Link
                    href={"#"}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="relative flex">
              <Image
                alt="gallery"
                className="absolute inset-0 h-full w-full object-contain object-center"
                // src="https://images.unsplash.com/photo-1536246026435-0cbb2a92952a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/assets/svgs/mongodb.svg"
                width={606}
                height={366}
              />
              <div className="relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
                <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-purple-500">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Alper Kamu
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="mt-6">
                  <Link
                    href={"#"}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="mt-16 flex w-full justify-center">
          <Link
            href="/courses"
            className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
          >
            View all courses
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
