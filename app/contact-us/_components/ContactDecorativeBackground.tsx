import { Fragment } from "react";

export default function ContactDecorativeBackground() {
  return (
    <Fragment>
      <div
        className="pointer-events-none absolute inset-0 sm:hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          width={343}
          height={388}
          viewBox="0 0 343 388"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
            fill="url(#linear1)"
            fillOpacity=".1"
          />
          <defs>
            <linearGradient
              id="linear1"
              x1="254.553"
              y1="107.554"
              x2="961.66"
              y2="814.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          width={359}
          height={339}
          viewBox="0 0 359 339"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
            fill="url(#linear2)"
            fillOpacity=".1"
          />
          <defs>
            <linearGradient
              id="linear2"
              x1="192.553"
              y1="28.553"
              x2="899.66"
              y2="735.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          width={160}
          height={678}
          viewBox="0 0 160 678"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
            fill="url(#linear3)"
            fillOpacity=".1"
          />
          <defs>
            <linearGradient
              id="linear3"
              x1="192.553"
              y1="325.553"
              x2="899.66"
              y2="1032.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Fragment>
  );
}
