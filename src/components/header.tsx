"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "New Proposal", href: "/proposals/new" },
    { name: "My Votes", href: "/votes" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              WEB DAO
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-indigo-600",
                    pathname === item.href ? "text-indigo-600" : "text-gray-500"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              1,234 MGS
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/user-profile.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
