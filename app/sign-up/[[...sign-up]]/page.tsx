import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main>
      <div className={"my-8 grid h-screen place-items-center"}>
        <SignUp
          appearance={{
            elements: {},
          }}
        />
      </div>
    </main>
  );
}
