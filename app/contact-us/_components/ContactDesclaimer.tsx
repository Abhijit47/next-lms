import Link from "next/link";

export default function ContactDesclaimer() {
  return (
    <p className="mt-6 max-w-3xl text-base text-teal-50">
      Thank you for visiting my portfolio website! I would love to hear from you
      and answer any questions you may have. Whether you&apos;re interested in
      collaborating on a project, have a business inquiry, or simply want to say
      hello, please don&apos;t hesitate to reach out. Your feedback and
      suggestions are also highly valued. I strive to provide the best possible
      experience for my visitors, so your input is greatly appreciated. Feel
      free to use the contact form or reach me directly at{" "}
      <Link
        href={"mailto:support@abhijit.com"}
        className={"underline hover:no-underline"}
      >
        support@abhijit.com
      </Link>
      . I look forward to connecting with you!
    </p>
  );
}
