// import ContactDecorativeBackground from "./_components/ContactDecorativeBackground";
// import ContactDesclaimer from "./_components/ContactDesclaimer";
// import ContactForm from "./_components/ContactForm";
// import ContactHeading from "./_components/ContactHeading";
// import ContactInformation from "./_components/ContactInformation";
// import ContactSocialIcons from "./_components/ContactSocialIcons";

import dynamic from "next/dynamic";

const ContactDecorativeBackground = dynamic(
  () => import("./_components/ContactDecorativeBackground"),
);
const ContactDesclaimer = dynamic(
  () => import("./_components/ContactDesclaimer"),
);
const ContactForm = dynamic(() => import("./_components/ContactForm"));
const ContactHeading = dynamic(() => import("./_components/ContactHeading"));
const ContactInformation = dynamic(
  () => import("./_components/ContactInformation"),
);
const ContactSocialIcons = dynamic(
  () => import("./_components/ContactSocialIcons"),
);

export default function ContactMe({
  params,
  searchParams,
}: {
  params: Record<string, string>;
  searchParams: URLSearchParams;
}) {
  return (
    <main>
      <section className="my-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden bg-gradient-to-b from-indigo-500 to-indigo-600 px-6 py-10 sm:px-10 xl:p-12">
                {/* Decorative angle backgrounds */}
                <ContactDecorativeBackground />

                <ContactHeading />

                <ContactDesclaimer />

                <ContactInformation />

                <ContactSocialIcons />
              </div>

              {/* Contact form */}
              <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-stone-800">
                  Send us a message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
