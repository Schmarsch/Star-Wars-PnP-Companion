import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <div className="navbar glass rounded-2xl mb-2">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl normal-case text-red-950">
          Star Wars - DnD Companion
        </Link>
      </div>
      <div className="flex-none">
        {session ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={session.user.image ?? ""}
                  alt={session.user.name ?? ""}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
              <li>
                <Link href="/api/auth/signout">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-ghost">
            <Link href="/api/auth/signin">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default navbar;
