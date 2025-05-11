import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Metadata } from "next";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <section>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <header className="flex border-b h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex justify-between w-full items-center gap-2 px-4">
                      <SidebarTrigger className="-ml-1" />
                      <ThemeToggle />
                    </div>
                  </header>
                  <main className="flex flex-1 flex-col p-4">{children}</main>

                  <footer></footer>
                </SidebarInset>
              </SidebarProvider>
            </section>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit + Shadcn/UI + Tanstack Table",
};
