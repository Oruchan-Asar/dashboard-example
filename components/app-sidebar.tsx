"use client";

import * as React from "react";
import Image from "next/image";
import { Album, Home, User, File, List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "User",
    url: "/users",
    icon: User,
  },
  {
    title: "Post",
    url: "/posts",
    icon: File,
  },
  {
    title: "Album",
    url: "/albums",
    icon: Album,
  },
  {
    title: "Todo",
    url: "/todos",
    icon: List,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 mb-2">
          <Image
            src="/lava-logo.svg"
            alt="logo"
            width={64}
            height={64}
            className="dark:invert-100"
          />
          {state === "expanded" && (
            <Image
              src="/lava-text.svg"
              alt="logo"
              width={64}
              height={64}
              className="dark:invert-100"
            />
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={item.url === pathname}>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src="/avatar.png" alt="Oruchan Asar" />
            <AvatarFallback className="rounded-lg">OA</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Oruchan Asar</span>
            <span className="truncate text-xs">m@example.com</span>
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
