import React from "react";
import Produk from "../Class/Produk";
// import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Produk nama="Macboock Pro 2021" stock="10" harga="35.000.000" />
      <Produk nama="Macboock Pro 2022" stock="11" harga="45.000.000" />
      <Produk nama="Macboock Pro 2023" stock="14" harga="54.000.000" />
      {/* <Blog
        tanggal="22 02 2022"
        judul="Web Development"
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam animi omnis iure, inventore nihil molestias dictaudantium."
      />
      <Blog
        tanggal="22 03 2022"
        judul="Web API"
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam animi omnis iure, inventore nihil molestias dicta ab corrupti blanditiis laboriosam repellendus suscipit debitis culpa officiis, sequi illum rerum laudantium."
      />
      <Blog
        tanggal="22 04 2022"
        judul="Mobile Developer"
        summary="Lorem ipsum  ab corrupti blanditiis laboriosam repellendus suscipit debitis culpa officiis, sequi illum rerum laudantium."
      /> */}
    </div>
  );
};
export default Home;
