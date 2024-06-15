"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">
          Buy Me a Chai{" "}
          <span>
            <img
              width={30}
              className="invertImg"
              src="https://media.tenor.com/fK_mqBr8xGIAAAAi/coffee-lover.gif"
              alt=""
            />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark: focus: ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Here
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark: focus: ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read more
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a Chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col text-center justify-center items-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="https://i.pinimg.com/736x/9d/d9/f3/9dd9f38afd850f9514d8664114448fab.jpg"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col text-center justify-center items-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/dollar.svg"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col text-center justify-center items-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="https://everyhealthgroup.com/wp-content/uploads/2023/11/m6ngde6dkgqawth2.gif"
            />
            <p className="font-bold">fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/J1MRDV4b4XA?si=-H2bfskn9tjrBdkp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
      </div>
    </>
  );
}
