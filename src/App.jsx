import CurrPageIndicator from "./CurrPageIndicator";
import { useState } from "react";
import CurrPage from "./CurrPage";
export default function App() {
  const [currPage, setCurrPage] = useState(1);
  const [genDetails, setGenDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });
  const [educationDetails, setEducationDetails] = useState([
    { schoolName: "", titleOfStudy: "", dateOfStudy: "", id: 0 },
  ]);
  const [experienceDetails, setExperienceDetails] = useState([
    {
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      fromDate: "",
      toDate: "",
      id: 0,
    },
  ]);

  return (
    <>
      <CurrPageIndicator currPage={currPage} />;
      <CurrPage
        currPage={currPage}
        setCurrPage={setCurrPage}
        genDetails={genDetails}
        setGenDetails={setGenDetails}
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
        experienceDetails={experienceDetails}
        setExperienceDetails={setExperienceDetails}
      />
    </>
  );
}
