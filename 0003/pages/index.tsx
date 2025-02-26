import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Selamat Datang di Website EntFladda!</h1>
      <p>Ini Adalah Halaman Utama.</p>
      <Link href="/about">
        About
      </Link>
    </div>
  );
};

export default HomePage;