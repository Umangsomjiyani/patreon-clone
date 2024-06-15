import React from "react";
import PaymentPage from "../components/PaymentPage";
import User from "../models/User";
import connectDB from "../db/connectDb";

const Username = ({ username }) => {
  return (
    <>
      <PaymentPage username={username} />
    </>
  );
};

export default Username;

// This function is required for Next.js to pre-render the dynamic paths
export async function getStaticPaths() {
  // Assuming you have a method to fetch all usernames from your database
  await connectDB();
  const users = await User.find({}, { username: 1 }); // Fetch all usernames

  const paths = users.map((user) => ({
    params: { username: user.username },
  }));

  return {
    paths,
    fallback: false, // or 'blocking' if you want to render on-demand
  };
}

// This function fetches the necessary data for the dynamic route
export async function getStaticProps({ params }) {
  await connectDB();
  const user = await User.findOne({ username: params.username });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      username: params.username,
    },
  };
}

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me A Chai`,
  };
}
