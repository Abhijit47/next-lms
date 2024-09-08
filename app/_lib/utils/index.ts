import crypto from "crypto";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function generateSlug(input: string) {
  return crypto
    .createHash("sha1")
    .update(input + Date.now())
    .digest("hex");
}

export function generateUUID() {
  return crypto.randomBytes(8).toString("hex");
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
