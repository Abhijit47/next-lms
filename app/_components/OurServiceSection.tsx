import { features } from "../_constants";

export default function OurServiceSection() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-indigo-700">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pb-24 sm:pt-20 lg:max-w-7xl lg:px-8 lg:pt-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          <span className="block">Unlock Your Potential</span>
          <span className="block text-indigo-200">
            with Our Expert Services
          </span>
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-purple-200">
          Our expert instructors guide you in crafting a personalized learning
          strategy that fits your unique needs. We equip you with top-notch
          resources and tools to excel in your studies and reach your academic
          aspirations.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-purple-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
