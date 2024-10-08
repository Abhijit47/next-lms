import SectionWrapper from "@/app/_components/SectionWrapper";
import Image from "next/image";
import Link from "next/link";

export default function SampleCards2() {
  return (
    <section className="body-font text-gray-600">
      <SectionWrapper className="px-5 pt-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Top Courses for You to Learn
            </h1>
            <div className="h-1 w-20 rounded bg-purple-500"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            We provide the best courses for you to learn and grow. Our courses
            are designed by professionals and experts in the field. You can
            learn at your own pace and get certified after completion. We offer
            a wide range of courses in various subjects including business,
            technology, and design. Our courses are designed to help you achieve
            your goals and dreams.{" "}
            <span className={"font-semibold text-orange-400"}>
              Start learning today!
            </span>
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="rounded-lg bg-gray-100 p-6">
              <Image
                className="mb-6 h-40 w-full rounded object-contain object-center"
                // src="https://dummyimage.com/720x400"
                src={"/assets/svgs/html.svg"}
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="title-font text-xs font-medium tracking-widest text-purple-500">
                SUBTITLE
              </h3>
              <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                Chichen Itza
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <div className="mt-6">
                <Link
                  href={"/courses/1"}
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="rounded-lg bg-gray-100 p-6">
              <Image
                className="mb-6 h-40 w-full rounded object-contain object-center"
                // src="https://dummyimage.com/721x401"
                src={"/assets/svgs/css.svg"}
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="title-font text-xs font-medium tracking-widest text-purple-500">
                SUBTITLE
              </h3>
              <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                Colosseum Roma
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
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
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="rounded-lg bg-gray-100 p-6">
              <Image
                className="mb-6 h-40 w-full rounded object-contain object-center"
                // src="https://dummyimage.com/722x402"
                src={"/assets/svgs/javascript.svg"}
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="title-font text-xs font-medium tracking-widest text-purple-500">
                SUBTITLE
              </h3>
              <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                Great Pyramid of Giza
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
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
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="rounded-lg bg-gray-100 p-6">
              <Image
                className="mb-6 h-40 w-full rounded object-contain object-center"
                // src="https://dummyimage.com/723x403"
                src={"/assets/svgs/react.svg"}
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="title-font text-xs font-medium tracking-widest text-purple-500">
                SUBTITLE
              </h3>
              <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                San Francisco
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
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
      </SectionWrapper>
    </section>
  );
}
