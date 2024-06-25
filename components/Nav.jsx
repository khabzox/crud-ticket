import { Home,Tag } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Home className="icon" />
          </Link>
          <Link href="/TicketPage/new">
            <Tag className="icon" />
          </Link>
        </div>
        <div>
          <Link className="text-default-text" href={"https://github.com/khabzox"} target="_black">khabzox</Link>
        </div>
      </nav>
    </>
  );
}
