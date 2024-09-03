import { classNames } from "../_lib/utils";

export default function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        className ? className : "",
        "mx-auto max-w-7xl sm:px-6 lg:px-8",
      )}
    >
      {children}
    </div>
  );
}
