'use server';

// import Contact from "@/app/_lib/database/models/contact.model";
// import { connectDB } from "@/app/_lib/database/mongoose";
// import { checkDocumentId } from "@/app/_lib/utils/helpers";

export async function createQuery(formData: FormData) {
  const { firstName, lastName, email, phone, subject, message } =
    Object.fromEntries(formData.entries());

  // console.log("data", { firstName, lastName, email, phone, subject, message });

  // await connectDB();

  // create a new document
  // const newQuery = await Contact.create({
  //   firstName,
  //   lastName,
  //   email,
  //   phone,
  //   subject,
  //   message,
  // });

  // console.log("newQuery", newQuery);

  // if (!newQuery) {
  //   throw new Error("Failed to create a new query");
  // }

  // return JSON.parse(JSON.stringify(newQuery));

  // artificial delay
  // await new Promise((resolve) => setTimeout(resolve, 5000));
}

export async function getQueries() {
  // await connectDB();
  // const queries = await Contact.find()
  //   .lean()
  //   .sort({ createdAt: -1 })
  //   .select("-updatedAt");
  // if (!queries) {
  //   throw new Error("Failed to fetch queries");
  // }
  // return JSON.parse(JSON.stringify(queries));
}

export async function getQuery(id: string) {
  // if (checkDocumentId(id)) {
  //   throw new Error("Invalid document ID");
  // }
  // await connectDB();
  // const query = await Contact.findById({ _id: id }).lean().select("-updatedAt");
  // if (!query) {
  //   throw new Error("Failed to fetch query");
  // }
  // return JSON.parse(JSON.stringify(query));
}

export async function deleteQuery(id: string) {
  // if (checkDocumentId(id)) {
  //   throw new Error("Invalid document ID");
  // }
  // await connectDB();
  // const query = await Contact.findByIdAndDelete({ _id: id })
  //   .lean()
  //   .select("-updatedAt");
  // if (!query) {
  //   throw new Error("Failed to delete query");
  // }
  // return JSON.parse(JSON.stringify(query));
}
