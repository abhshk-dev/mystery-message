import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id: String;
    isVerified?: Boolean;
    isAcceptingMessages?: Boolean;
    username?: string;
  }
  interface Session {
    user: {
      _id?: string;
      isVerified?: Boolean;
      isAcceptingMessages?: Boolean;
      username?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    isVerified?: Boolean;
    isAcceptingMessages?: Boolean;
    username?: string;
  }
}
