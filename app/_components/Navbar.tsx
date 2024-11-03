"use client";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import { Fragment } from "react";

import NavLogo from "@/public/assets/images/logo.png";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

import {
  ClerkLoaded,
  GoogleOneTap,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSelectedLayoutSegments } from "next/navigation";
import { solutions } from "../_constants";
import { classNames } from "../_lib/utils";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const segments = useSelectedLayoutSegments();

  if (segments.includes("(admin)")) {
    return null;
  }

  return (
    <header className={"sticky top-0 z-50 bg-white"}>
      <Popover className="relative bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="relative inline-block">
              <span className="sr-only">NxtLMS</span>
              <Image
                className="h-12 w-auto sm:h-16"
                // src="https://tailwindui.com/plus/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                src="/assets/images/logo.png"
                alt="nav-logo"
                width={NavLogo.width}
                height={NavLogo.height}
                priority
                placeholder="blur"
                blurDataURL={NavLogo.blurDataURL}
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500",
                      )}
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              href="#pricing"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Partners
            </Link>
            <Link
              href="/courses"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Courses
            </Link>
          </PopoverGroup>
          <div className="hidden items-center justify-end gap-x-2 md:flex md:flex-1 lg:w-0">
            <ThemeSwitch />
            <GoogleOneTap />
            <SignedOut>
              <SignUpButton mode="redirect">
                <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                  <span>Sign up</span>
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <ClerkLoaded>
                <UserButton
                  appearance={{
                    // elements: {
                    //   userButtonPopoverFooter: {
                    //     display: "none",
                    //   },
                    // },
                    layout: {
                      unsafe_disableDevelopmentModeWarnings: true,
                    },
                  }}
                />
              </ClerkLoaded>
            </SignedIn>
            {/* <Link
              href="/sign-in"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >
              Sign up
            </Link> */}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="h-12 w-auto sm:h-16"
                      // src="https://tailwindui.com/plus/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      src="/assets/images/logo.png"
                      alt="nav-logo"
                      width={NavLogo.width}
                      height={NavLogo.height}
                      priority
                      placeholder="blur"
                      blurDataURL={NavLogo.blurDataURL}
                    />
                  </div>
                  <div className="-mr-2">
                    <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="#pricing"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Partners
                  </Link>
                  <Link
                    href="/courses"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Courses
                  </Link>
                </div>
                <div className="mt-6 inline-flex items-center gap-x-2">
                  <ThemeSwitch />
                  <SignedOut>
                    <SignUpButton mode="modal">
                      <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                        <span>Sign in</span>
                      </button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  {/* <Link
                    href="/sign-up"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Sign up
                    </Link> */}
                  <SignedOut>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?
                      <SignInButton mode="modal">
                        <button className="text-gray-900">
                          <span>Sign in</span>
                        </button>
                      </SignInButton>
                      {/* <Link href="/sign-in" className="text-gray-900">
                      Sign in
                      </Link> */}
                    </p>
                  </SignedOut>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </header>
  );
}
