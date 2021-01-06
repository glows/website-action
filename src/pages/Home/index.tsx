import React from "react";
import { useLocation } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const Home = () => {
  let location = useLocation();
  console.log("location", location.pathname);
  return (
    <div>
      "I am one of those who are very willing to be refuted if I say anything
      which is not true, and very willing to refute any one else who says what
      is not true, and quite as ready to be refuted as to refute- for I hold
      that this is the greater gain of the two, just as the gain is greater of
      being cured of a very great evil than of curing another." - Socrates,
      Gorgias
      <BasicLayout pathName={location.pathname}></BasicLayout>
    </div>
  );
};

export default Home;
