"use client"

import { usePathname } from "next/navigation";
import {
  FileIcon,
  FolderIcon,
  GalleryIcon,
  ProfileIcon,
  SharedIcon,
} from "../../../public/NavIcons";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Array of navigation items
  const navElements = [
    {
      title: "My Files",
      path: "/files",
      icon: <FileIcon active={isActive("/files")} />,
    },
    {
      title: "Gallery",
      path: "/gallery",
      icon: <GalleryIcon active={isActive("/gallery")} />,
    },
    {
      title: "Folders",
      path: "/folders",
      icon: <FolderIcon active={isActive("/folders")} />,
    },
    {
      title: "Shared with me",
      path: "/shared",
      icon: <SharedIcon active={isActive("/shared")} />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <ProfileIcon active={isActive("/profile")} />,
    },
  ];

  return (
    <nav className={style.sidebar}>
      <h3 className={style.logoText}>VaultHub</h3>
      <div className={style.navItems}>
        {navElements.map(({ title, path, icon }) => (
          <Link
            key={title}
            href={path}
            className={`${style.navItem} ${
              isActive(path) ? style.active : null
            }`}
          >
            {icon}
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
