import ProcessImage1 from "@/public/assets/images/process-1.jpg";
import ProcessImage2 from "@/public/assets/images/process-2.jpg";
import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function OurProcessSection() {
  return (
    <section className="relative overflow-hidden pb-32 pt-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />
      <div className="relative">
        <SectionWrapper className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  <span className="block">Excel Beyond Expectations</span>
                  <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Stay Ahead of Your Peers
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Elevate your academic journey with our comprehensive resources
                  and cutting-edge tools. We empower you to master your studies,
                  stay ahead of the curve, and achieve your highest academic
                  aspirations.
                </p>
                <div className="mt-6">
                  <Link
                    href="/courses"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    “The team was incredibly supportive and provided me with all
                    the resources and tools I needed to excel in my studies.
                    Their guidance made a significant difference in my learning
                    journey.”
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                        width={100}
                        height={50}
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              {/* <Image
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='https://tailwindui.com/plus/img/component-images/inbox-app-screenshot-1.jpg'
                alt='Inbox user interface'
                width={2560}
                height={1536}
              /> */}
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                // src="/assets/images/process-1.jpg"
                src={ProcessImage1.src}
                alt="process-1"
                width={ProcessImage1.width}
                height={ProcessImage1.height}
                placeholder="blur"
                blurDataURL={ProcessImage1.blurDataURL}
              />
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className="mt-24">
        <SectionWrapper className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Unlock Your Full Potential with Our Dedicated Support
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Empowering your success with comprehensive resources and
                  unwavering support. Our dedicated team is with you every step
                  of the way, ensuring you achieve your academic goals and
                  unlock your full potential.
                </p>
                <div className="mt-6">
                  <Link
                    href="/courses"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              {/* <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/plus/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
                width={2560}
                height={1536}
              /> */}
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                // src="/assets/images/process-2.jpg"
                src={ProcessImage2.src}
                alt="process 2"
                width={ProcessImage2.width}
                height={ProcessImage2.height}
                placeholder="blur"
                blurDataURL={ProcessImage2.blurDataURL}
              />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
