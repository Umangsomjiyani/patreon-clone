import React from "react";
import PaymentPage from "../components/PaymentPage";
import { notFound } from "next/navigation";
import User from "../models/User";
import connectDB from "../db/connectDb";

const username = async ({ params }) => {
  const checkUser = async () => {
    await connectDB();
    let u = await User.findOne({ username: params.username });
    if (!u) {
      return notFound();
    }
  };
  await checkUser();
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default username;

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me A Chai`,
  };
}
