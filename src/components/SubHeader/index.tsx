import React from "react";
import Link from "next/link";

const SubHeader = () => {
  return (
    <section className="w-full bg-blue-light-5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-7.5 xl:px-0 ">
        <div className="w-full flex items-center justify-between ">
          <div></div>
          <div>
            <div className="flex items-center gap-10">
              <Link href="#" className="hover:text-blue-light-2">
                Login
              </Link>
              <Link href="#" className="hover:text-blue-light-2">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
