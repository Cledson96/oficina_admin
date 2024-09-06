"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Layout from "@components/layout/default";
import Loading from "@components/loading/fullPage";
export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  return (
    <>
      {status === "authenticated" ? <Layout>{children}</Layout> : <Loading />}
    </>
  );
}
