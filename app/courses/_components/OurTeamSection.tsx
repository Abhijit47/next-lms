import SectionWrapper from "@/app/_components/SectionWrapper";
import teams from "@/data/teams.json";
import Image from "next/image";

export default function OurTeamSection() {
  return (
    <section className="body-font text-gray-600">
      <SectionWrapper className="px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium tracking-widest text-gray-900">
            Meet Our Dedicated Team
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Our team is composed of passionate professionals dedicated to your
            success. With diverse expertise and a commitment to excellence, we
            work tirelessly to provide you with the best learning experience.
            Join us and benefit from the knowledge and support of industry
            leaders who are here to help you achieve your goals.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {teams.map((team) => (
            <div className="p-4 lg:w-1/2" key={team.id}>
              <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <Image
                  alt="team"
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  // src="https://dummyimage.com/200x200"
                  src={team.image}
                  width={200}
                  height={200}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    {team.name}
                  </h2>
                  <h3 className="mb-3 text-gray-500">UI Developer</h3>
                  <p className="mb-4">{team.description}</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="p-4 lg:w-1/2">
            <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
              <Image
                alt="team"
                className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                // src="https://dummyimage.com/200x200"
                src={`https://i.pravatar.cc/200?img=27`}
                width={200}
                height={200}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font text-lg font-medium text-gray-900">
                  Holden Caulfield
                </h2>
                <h3 className="mb-3 text-gray-500">UI Developer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
              <Image
                alt="team"
                className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                // src="https://dummyimage.com/201x201"
                src={`https://i.pravatar.cc/200?img=33`}
                width={200}
                height={200}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font text-lg font-medium text-gray-900">
                  Alper Kamu
                </h2>
                <h3 className="mb-3 text-gray-500">Designer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
              <Image
                alt="team"
                className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                // src="https://dummyimage.com/204x204"
                src={`https://i.pravatar.cc/200?img=59`}
                width={200}
                height={200}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font text-lg font-medium text-gray-900">
                  Atticus Finch
                </h2>
                <h3 className="mb-3 text-gray-500">UI Developer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
              <Image
                alt="team"
                className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                // src="https://dummyimage.com/206x206"
                src={`https://i.pravatar.cc/200?img=68`}
                width={200}
                height={200}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font text-lg font-medium text-gray-900">
                  Henry Letham
                </h2>
                <h3 className="mb-3 text-gray-500">Designer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </SectionWrapper>
    </section>
  );
}
