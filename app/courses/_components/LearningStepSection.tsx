import SectionWrapper from "@/app/_components/SectionWrapper";
import { learningSteps } from "@/app/_constants";
import Image from "next/image";

export default function LearningStepSection() {
  return (
    <section className="body-font text-gray-600">
      <SectionWrapper className="flex flex-wrap px-5">
        <div className="flex w-full flex-wrap">
          <div className="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
            {learningSteps.map((step, idx) => (
              <div className="relative flex pb-12" key={step.id}>
                {idx !== learningSteps.length - 1 && (
                  <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                  </div>
                )}
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  {<step.icon className="h-4 w-4" />}
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="mb-1 text-sm font-semibold capitalize tracking-wider text-gray-900 lg:text-xl">
                    {step.stepName}
                  </h2>
                  <p className="text-sm leading-relaxed lg:text-lg">
                    {step.stepDescription}
                  </p>
                </div>
              </div>
            ))}
            {/* <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  STEP 2
                </h2>
                <p className="leading-relaxed">
                  Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                  slow-carb health goth, vape typewriter.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  STEP 3
                </h2>
                <p className="leading-relaxed">
                  Coloring book nar whal glossier master cleanse umami. Salvia
                  +1 master cleanse blog taiyaki.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  STEP 4
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  FINISH
                </h2>
                <p className="leading-relaxed">
                  Pitchfork ugh tattooed scenester echo park gastropub whatever
                  cold-pressed retro.
                </p>
              </div>
            </div> */}
          </div>
          <Image
            className="mt-12 rounded-lg object-contain object-center md:mt-0 md:w-1/2 lg:w-3/5"
            src="/assets/images/steps.jpg"
            alt="step"
            width={5209}
            height={3125}
          />
        </div>
      </SectionWrapper>
    </section>
  );
}
