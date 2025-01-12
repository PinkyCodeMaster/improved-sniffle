import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";
import { LatestPost } from "~/components/posts/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from Improved Sniffle" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-center sm:text-[5rem]">
            Welcome to <span className="text-[#ff66cc]">Improved Sniffle</span>
          </h1>
          <p className="text-xl text-center text-white/80 max-w-2xl">
            Improved Sniffle is the ultimate template for creating modern, fast, and scalable websites. Built with the latest web technologies, it allows you to rapidly deploy a professional-grade website with ease.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Card className="bg-white/10">
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>
                  Explore the powerful features that come with Improved Sniffle, including authentication, data management, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/features">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10">
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Learn how to get started with Improved Sniffle, set up your environment, and customize the template to fit your needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/documentation">
                    Read Docs
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              {session && (
                <p className="text-xl text-white/90">
                  Logged in as <span className="font-semibold">{session.user?.name}</span>
                </p>
              )}

              <Button asChild variant="default" className="bg-[#ff66cc] hover:bg-[#e55bb5]">
                <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                  {session ? "Sign Out" : "Sign In"}
                </Link>
              </Button>
            </div>
          </div>

          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}

