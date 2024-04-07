import type { NextPage } from "next";
import Head from "next/head";
import Login from "./Login";

const AdminDashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Food_Delivery</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Login />
    </div>
  );
};

export default AdminDashboard;
