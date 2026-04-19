import EducationForm from "./EducationForm";
import NavBtns from "./NavBtns";

export default function EducationPage({
  currPage,
  setCurrPage,
  educationDetails,
  setEducationDetails,
}) {
  return (
    <form>
      {educationDetails.map((ed, index) => {
        if (educationDetails.length === 1) {
          return (
            <EducationForm
              educationDetails={educationDetails}
              setEducationDetails={setEducationDetails}
              index={index}
              key={index}
            />
          );
        }

        return (
          <div key={index}>
            <EducationForm
              educationDetails={educationDetails}
              setEducationDetails={setEducationDetails}
              index={index}
            />
            <div className="flex justify-center mt-2 mb-10">
              <button
                id={index}
                onClick={(e) => {
                  let filtred = educationDetails.filter((ed, i) => {
                    return parseInt(e.target.id) !== i;
                  });
                  setEducationDetails([...filtred]);
                }}
                className="shadow-md border bg-gray-200 w-2/5 rounded py-1 pl-2 "
              >
                Remove -
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center mt-2 mb-10">
        <button
          onClick={() =>
            setEducationDetails([
              ...educationDetails,
              {
                schoolName: "",
                titleOfStudy: "",
                dateOfStudy: "",
                id: educationDetails.length,
              },
            ])
          }
          className="shadow-md border text-white bg-gray-600 w-2/5 rounded py-1 pl-2 "
        >
          Add +
        </button>
      </div>
      <NavBtns
        currPage={currPage}
        setCurrPage={setCurrPage}
        data={educationDetails}
      />
    </form>
  );
}
