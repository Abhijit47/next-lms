"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createQuery } from "../_actions/contact.actions";

type ContactFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ContactFormInputs>({
    // defaultValues: {
    //   firstName: "jhon",
    //   lastName: "doe",
    //   email: "jhon@example.com",
    //   phone: "9852147132",
    //   subject: "random subject",
    //   message:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Quis viverra nibh cras pulvinar mattis nunc. Nisi est sit amet facilisis magna etiam tempor orci eu. Sapien nec sagittis aliquam malesuada bibendum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ultricies leo integer malesuada nunc. Felis bibendum ut tristique et egestas quis ipsum.",
    // },
  });

  // startTransition(() => {});

  function onSubmit(data: ContactFormInputs) {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone ?? "");
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      const result = await createQuery(formData);
      // if (result.status === "success") {
      //   toast.success("Your message has been sent successfully", {
      //     closeButton: true,
      //   });
      // } else {
      //   toast.error("There was an error sending your message", {
      //     closeButton: true,
      //   });
      // }

      toast.success("Your message has been sent successfully", {
        closeButton: true,
        // classNames: "bg-green-500",
        className: "bg-green-500 text-white",
      });
      reset();
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <label
          htmlFor="firstName"
          className="text-warm-gray-900 block text-sm font-medium"
        >
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="firstName"
            autoComplete="given-name"
            className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            // defaultValue={"jhon"}
            {...register("firstName", {
              required: "First name is required",
            })}
          />
          {errors.firstName && (
            <FormError>{errors.firstName.message || ""}</FormError>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="text-warm-gray-900 block text-sm font-medium"
        >
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="lastName"
            autoComplete="family-name"
            className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            // defaultValue={"doe"}
            {...register("lastName", {
              required: "Last name is required",
            })}
          />
          {errors.lastName && (
            <FormError>{errors.lastName.message || ""}</FormError>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-warm-gray-900 block text-sm font-medium"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            // defaultValue={"jhon@example.com"}
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && <FormError>{errors.email.message || ""}</FormError>}
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="phone"
            className="text-warm-gray-900 block text-sm font-medium"
          >
            Phone
          </label>
          <span id="phone-optional" className="text-warm-gray-500 text-sm">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            // pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
            className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            aria-describedby="phone-optional"
            // defaultValue={"9852147132"}
            {...register("phone", {
              pattern: {
                value: /[0-9]{3}[0-9]{3}[0-9]{4}/,
                message: "Phone number must be in the format 123-456-7890",
              },
              // validate: (value) =>
              //   value.length === 12 ||
              //   "Phone number must be in the format 123-456-7890",
            })}
          />
          {errors.phone && <FormError>{errors.phone.message || ""}</FormError>}
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="text-warm-gray-900 block text-sm font-medium"
        >
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="subject"
            className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            // defaultValue={"random subject"}
            {...register("subject", {
              required: "Subject is required",
            })}
          />
          {errors.subject && (
            <FormError>{errors.subject.message || ""}</FormError>
          )}
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="message"
            className="text-warm-gray-900 block text-sm font-medium"
          >
            Message
          </label>
          <span id="message-max" className="text-warm-gray-500 text-sm">
            Max. {watch("message")?.length ?? 0} characters
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="message"
            rows={4}
            className="text-warm-gray-900 border-warm-gray-300 block w-full resize-y rounded-md border px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            aria-describedby="message-max"
            // defaultValue={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Quis viverra nibh cras pulvinar mattis nunc. Nisi est sit amet facilisis magna etiam tempor orci eu. Sapien nec sagittis aliquam malesuada bibendum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ultricies leo integer malesuada nunc. Felis bibendum ut tristique et egestas quis ipsum."
            // }
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 500,
                message: "Message must not exceed 500 characters",
              },
            })}
          />
          {errors.message && (
            <FormError>{errors.message.message || ""} </FormError>
          )}
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-indigo-200 disabled:text-indigo-500 sm:w-auto"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

function FormError({ children }: { children: React.ReactNode }) {
  return <span className={"mt-2 text-sm text-red-500"}>{children}</span>;
}
