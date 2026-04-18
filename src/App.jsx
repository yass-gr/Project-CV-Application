import CurrPageIndicator from "./CurrPageIndicator";
import { useState } from "react";
import NavBtns from "./NavBtns";
import CurrPage from "./CurrPage";
export default function App() {
  const [currPage, setCurrPage] = useState(1);

  return (
    <>
      <CurrPageIndicator currPage={currPage} />;
      <CurrPage currPage={currPage} />
      <NavBtns currPage={currPage} setCurrPage={setCurrPage} />
    </>
  );
}
