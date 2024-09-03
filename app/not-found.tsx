import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-white lg:relative">
      <div className="flex flex-grow flex-col">
        <main className="flex flex-grow flex-col bg-white">
          <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 pt-10 sm:pt-16">
              <a href="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                  width={163}
                  height={32}
                />
              </a>
            </div>
            <div className="my-auto flex-shrink-0 py-16 sm:py-32">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 bg-gray-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <nav className="flex space-x-4">
              <Link
                href="/contact-us"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Contact Support
              </Link>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <Link
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Status
              </Link>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <Link
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Twitter
              </Link>
            </nav>
          </div>
        </footer>
      </div>
      <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
        <Image
          className="aspect-square h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
          alt=""
          // width={1825}
          // height={1217}
          fill
          sizes="(min-width: 1536px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}
