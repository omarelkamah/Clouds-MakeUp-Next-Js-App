import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setUser } from "../../store/slice/user";

const index = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  session?.user && dispatch(setUser(session.user));
  session?.user && router.push("/");

  if (session) {
    return (
      <div
        className="flex items-center gap-5 cursor-pointer rounded-full w-fit p-5 text-backLightDark bg-white font-krona shadow-lg"
        onClick={() => {
          signOut();
          // dispatch(setUser(session.user));
        }}
      >
        <FcGoogle className="text-xl" />
        logout with Google account
      </div>
    );
  } else {
    return (
      <div>
        <div className="overlay" />
        <div>
          <Image
            src="/images/about.jpg"
            layout="fill"
            objectFit="cover"
            alt="background"
          />
        </div>
        <div className="flex justify-center absolute z-10 centerItemsCustom">
          <div
            className="flex items-center gap-5 cursor-pointer rounded-full w-fit p-5 text-backLightDark bg-white font-krona shadow-lg"
            onClick={() => {
              signIn();
            }}
          >
            <FcGoogle className="text-xl" />
            login with Google account
          </div>
        </div>
      </div>
    );
  }
};

export default index;
