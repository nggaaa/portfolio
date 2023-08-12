import React from "react";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="35" cy="43" r="5" fill="black" />
          <circle cx="92" cy="43" r="5" fill="black" />
          <path
            d="M35.639 86.9453C37.3451 81.116 40.706 75.9069 45.3141 71.9499C49.9221 67.9929 55.5794 65.4579 61.5996 64.6525C67.6199 63.8471 73.7445 64.8058 79.2307 67.4123C84.7168 70.0189 89.3288 74.1613 92.5073 79.3372L92.505 79.3386C89.3268 74.1632 84.7152 70.0211 79.2295 67.4148C73.7438 64.8085 67.6197 63.8499 61.6 64.6552C55.5802 65.4606 49.9235 67.9953 45.3159 71.952C40.7082 75.9086 37.3476 81.1173 35.6416 86.9461L35.639 86.9453Z"
            stroke="black"
            stroke-width="5"
            stroke-miterlimit="11.4737"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      <h2 className="font-extrabold text-4xl -translate-y-10">Not Found</h2>
      <Link
        href={"/"}
        className={
          "font-bold shadow-[5px_5px_0px_-1px_rgba(0,0,0,1)] bg-white active:shadow-[3px_3px_0px_-1px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:bg-purple-400 py-3 border-black  border-solid border-2 lg:py-4 px-6 lg:px-16 text-white-500  rounded-lg mt-4 w-auto text-justify transition-all outline-none"
        }
      >
        Kembali
      </Link>
    </div>
  );
}
