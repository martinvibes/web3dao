"use client";
import discord from "../../public/discord.svg";
import x from "../../public/x.svg";
import github from "../../public/github.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 MGS DAO. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Image
              src={discord}
              alt="icon"
              className="h-5 w-5 cursor-pointer"
            />
            <Image src={x} alt="icon" className="h-5 w-5 cursor-pointer" />
            <Image src={github} alt="icon" className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
