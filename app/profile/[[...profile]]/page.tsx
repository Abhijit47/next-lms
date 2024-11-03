import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <main>
      <section className={"grid h-dvh place-items-center"}>
        <UserProfile
          appearance={{
            layout: {
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
        />
      </section>
    </main>
  );
}
