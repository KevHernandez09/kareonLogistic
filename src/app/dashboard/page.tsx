import { getSession } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="rounded bg-white p-6 shadow">
          <p className="mb-2 text-sm text-slate-700">
            You are not logged in.
          </p>
          <Link
            href="/auth/login"
            className="text-sm font-medium text-slate-900 underline"
          >
            Go to login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="rounded bg-white p-6 shadow">
        <h1 className="text-xl font-semibold mb-2">
          Welcome, {session.email}
        </h1>
        <p className="text-sm text-slate-600">
          This will be the main dashboard of Kareon.
        </p>
      </div>
    </main>
  );
}
