import "../globals.css";

import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh grid grid-cols-[240px_1fr]">
      <aside className="border-r p-4">
        <div className="font-semibold">Kepegawaian</div>
        <Separator className="my-4" />
        <nav className="space-y-1">
          <Link href="/dashboard" className="block w-full rounded-md px-3 py-2 text-sm hover:bg-muted">Dashboard</Link>
          <Button variant="ghost" className="w-full justify-start" disabled>
            Pegawai
          </Button>
        </nav>
        <div className="mt-6">
          <form action="/api/auth/logout" method="post">
            <Button type="submit" variant="secondary" className="w-full">
              Logout
            </Button>
          </form>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="border-b p-4">
          <div className="text-sm text-muted-foreground">Admin</div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
