import Link from "next/link";
import Mywork from "@/components/Mywork";

export const metadata = {
  title: "Projects - Abhishek",
  description: "Browse all projects built by Abhishek.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-[12%]">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-black"
        >
          Back to home
        </Link>
      </div>
      <Mywork showAll />
    </main>
  );
}
