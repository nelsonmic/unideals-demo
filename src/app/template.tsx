"use client"

import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";
import { FC, PropsWithChildren } from "react";
import { Arrow } from "../../components/Icons";
import Link from "next/link";

const Template: FC<PropsWithChildren> = ({ children }) => {

      return (
            <>
                  {
                        true && (
                              <Link target="_blank" href={"https://chromewebstore.google.com/detail/student-beans/pdmhehfogekmpmdoemhabjpaiadagpgp"}>
                                    <div className="flex flex-row space-x-2 items-center justify-center p-2 font-[400] bg-purple-100">
                                          <p className="text-white text-lg">Never miss deals ith our Chrome extension - it&apos;s free</p>
                                          <Arrow fill="#ffffff" width={26} height={20}/>
                                    </div>
                              </Link>
                        )
                  }
                  <div className="border-box">
                        <Navbar />
                        <main>{ children }</main>
                        <Footer />
                  </div>
            </>
      )

}

export default Template;