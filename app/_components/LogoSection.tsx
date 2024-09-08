import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function LogoSection() {
  return (
    <section className="bg-gray-50">
      <SectionWrapper className="px-4 py-16">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-700">
          Our Trusted Partners and Customers 5 very average small businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="aspect-video h-full w-full object-contain object-center"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
              width={218}
              height={122}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-full w-full object-contain object-center"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
              width={218}
              height={122}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-full w-full object-contain object-center"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
              width={218}
              height={122}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <Image
              className="h-full w-full object-contain object-center"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
              width={218}
              height={122}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
            <Image
              className="h-full w-full object-contain object-center"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
              width={218}
              height={122}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
