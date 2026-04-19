import EducationPage from "./EducationPage";
import GeneralDetailsPage from "./GeneralDetailsPage";
import ExperiencePage from "./ExperiencePage";
import ReviewPage from "./ReviewPage";

export default function CurrPage({
  currPage,
  setCurrPage,
  genDetails,
  setGenDetails,
  educationDetails,
  setEducationDetails,
  experienceDetails,
  setExperienceDetails,
}) {
  if (currPage === 1) {
    return (
      <>
        <h1 className="text-2xl text-gray-600  font-bold text-center">
          General details
        </h1>
        <GeneralDetailsPage
          currPage={currPage}
          setCurrPage={setCurrPage}
          genDetails={genDetails}
          setGenDetails={setGenDetails}
        />;
      </>
    );
  }
  if (currPage === 2) {
    return (
      <>
        <h1 className="text-2xl text-gray-600 font-bold text-center">
          Education
        </h1>
        <EducationPage
          currPage={currPage}
          setCurrPage={setCurrPage}
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />;
      </>
    );
  }
  if (currPage === 3) {
    return (
      <>
        <h1 className="text-2xl text-gray-600 font-bold text-center">
          Experience
        </h1>
        <ExperiencePage
          currPage={currPage}
          setCurrPage={setCurrPage}
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />;
      </>
    );
  }
  if (currPage === 4) {
    return (
      <>
        <h1 className="text-2xl text-gray-600 font-bold text-center">Review</h1>
        <ReviewPage
          currPage={currPage}
          setCurrPage={setCurrPage}
          genDetails={genDetails}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
        />;
      </>
    );
  }
}
