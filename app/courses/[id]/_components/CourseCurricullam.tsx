import SectionWrapper from "@/app/_components/SectionWrapper";
import Link from "next/link";

export default function CourseCurricullam({ course }: { course: Course }) {
  return (
    <section className="body-font overflow-hidden text-gray-600">
      <SectionWrapper className="px-5 pb-24">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {course.curriculam.map((curriculam, idx) => (
            <div
              key={curriculam.id}
              className="flex flex-wrap py-8 md:flex-nowrap"
            >
              <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                <span className="title-font font-semibold text-gray-700">
                  Duration
                </span>
                <span className="mt-1 text-sm text-gray-500">
                  {curriculam.duration}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                  {curriculam.title}
                </h2>
                <p className="leading-relaxed">{curriculam.description}</p>
                <Link
                  href={"#"}
                  className="mt-4 inline-flex items-center text-purple-500"
                >
                  Get Session Link
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {/* <div className="flex flex-wrap py-8 md:flex-nowrap">
            <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
              <span className="title-font font-semibold text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <Link
                href={"#"}
                className="mt-4 inline-flex items-center text-purple-500"
              >
                Get Session Link
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap py-8 md:flex-nowrap">
            <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
              <span className="title-font font-semibold text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a className="mt-4 inline-flex items-center text-purple-500">
                Learn More
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap py-8 md:flex-nowrap">
            <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
              <span className="title-font font-semibold text-gray-700">
                CATEGORY
              </span>
              <span className="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a className="mt-4 inline-flex items-center text-purple-500">
                Learn More
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </SectionWrapper>
    </section>
  );
}
