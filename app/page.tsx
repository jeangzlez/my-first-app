import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome
        </h1>

        <div className="mt-6 space-y-3">
          <Button
            text="About"
            href="/about"
            color="bg-blue-600"
          />

          <Button
            text="Contact"
            href="/contact"
            color="bg-green-600"
          />

          <Button
            text="Projects"
            href="/projects"
            color="bg-red-600"
          />

          <Button
            text="Skills"
            href="/skills"
            color="bg-purple-600"
          />
        </div>
      </div>
    </main>
  );
}