"use client";
import NProgress from "nprogress";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function useNProgress() {
  const pathname = usePathname();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    if (timer.current) clearTimeout(timer.current);
    NProgress.start();

    // Delay to simulate loading (replace with actual data fetching delay if needed)
    timer.current = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [pathname]);
}
