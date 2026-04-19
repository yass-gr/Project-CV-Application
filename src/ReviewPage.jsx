import NavBtns from "./NavBtns";

export default function ReviewPage({
  currPage,
  setCurrPage,
  genDetails,
  educationDetails,
  experienceDetails,
}) {
  return <NavBtns currPage={currPage} setCurrPage={setCurrPage} />;
}
