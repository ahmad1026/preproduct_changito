"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
} from "@mui/material";
import { Home, RotateCcw, Settings, Info, Terminal } from "react-feather";
import Link from "next/link";
import Auth from "./Home/Modals/Auth";
import Hamburger from "hamburger-react";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import { Heart } from "react-feather";
import { useRouter, usePathname } from "next/navigation";
const list = () => {
  return (
    <List>
      {["خانه", "مستندات", "درباره ما", "قوانین استفاده"].map((text, index) => (
        <ListItem key={text} disablePadding className="text-white">
          <Link
            className="w-full"
            href={
              index === 0
                ? "/"
                : index == 1
                ? "/api-doc"
                : index == 2
                ? "/"
                : index == 3
                ? "/terms"
                : ""
            }
          >
            <ListItemButton className="w-full">
              <ListItemIcon>
                {index === 0 && <Home color="#ffffff" />}
                {index === 1 && <Terminal color="#ffffff" />}
                {index === 2 && <Info color="#ffffff" />}
                {index === 3 && <Settings color="#ffffff" />}
              </ListItemIcon>
              <ListItemText className="text-right" primary={text} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

const AppHeader = () => {
  const [authModal, setAuthModal] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const pathName = usePathname();

  return (
    <>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={() => setOpen(false)}
        dir="rtl"
      >
        <div className="h-full bg-[#1c1c1c]">{list()}</div>
      </Drawer>

      <div className="w-full hidden md:block sticky z-10 px-8 top-0 bg-[#1C1C1C]">
        <Auth open={authModal} onOpenDialog={setAuthModal} />
        <div className="max-w-7xl mx-auto py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img width={50} src="/logook.png" alt="" />
            <ul className="flex items-center gap-2 text-white">
              <Link
                className={`${
                  pathName === "/" ? "border" : ""
                } gap-2 rounded-md px-4 py-1 flex items-center`}
                href={"/"}
              >
                <Home size={18} />
                <span className="text-sm">خانه</span>
              </Link>
              <Link
                className={`${
                  pathName === "/api-doc" ? "border" : ""
                } gap-2 rounded-md px-4 py-1 flex items-center`}
                href={"/api-doc"}
              >
                <Terminal size={18} />
                <span className="text-sm">مستندات</span>
              </Link>
              <Link
                className={`${
                  pathName === "/about-us" ? "border" : ""
                } gap-2 rounded-md px-4 py-1 flex items-center`}
                href={"/about-us"}
              >
                <Info size={18} />
                <span className="text-sm">درباره ما</span>
              </Link>
              <Link
                className={`${
                  pathName === "/terms" ? "border" : ""
                } gap-2 rounded-md px-4 py-1 flex items-center`}
                href={"/terms"}
              >
                <Settings size={18} />
                <span className="text-sm ">قوانین استفاده</span>
              </Link>
            </ul>
          </div>

          <Button
            onClick={() => setAuthModal(true)}
            className="flex items-center gap-3"
            variant="outlined"
            color={"primary"}
          >
            <span>ورود</span>
            <span>|</span>

            <span>ثبت نام</span>
          </Button>
        </div>
      </div>

      <div className="w-full fixed top-0 left-0 z-50 bg-[#1c1c1c] flex md:hidden items-center justify-between p-4">
        <div className="flex gap-2 items-center">
          <Hamburger
            size={22}
            color="#BB86FC"
            toggled={isOpen}
            toggle={setOpen}
          />
          <h1 className="text-white">
            <span>&#8202;</span>
          </h1>
        </div>
        <Button
          onClick={() => setAuthModal(true)}
          className="flex items-center gap-3"
          variant="outlined"
          color={"primary"}
        >
          <span>ورود</span>
          <span>|</span>
          <span>ثبت نام</span>
        </Button>
      </div>
    </>
  );
};

export default AppHeader;
