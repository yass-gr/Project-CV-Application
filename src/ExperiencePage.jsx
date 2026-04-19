import ExperienceForm from "./ExperienceForm";
import NavBtns from "./NavBtns";

export default function ExperiencePage({
  currPage,
  setCurrPage,
  experienceDetails,
  setExperienceDetails,
}) {
  return (
    <>
      {experienceDetails.map((ed, index) => {
        if (experienceDetails.length === 1) {
          return (
            <ExperienceForm
              key={index}
              experienceDetails={experienceDetails}
              setExperienceDetails={setExperienceDetails}
              index={index}
            />
          );
        }

        return (
          <div key={index}>
            <ExperienceForm
              experienceDetails={experienceDetails}
              setExperienceDetails={setExperienceDetails}
              index={index}
            />
            <div className="flex justify-center mt-2 mb-10">
              <button
                id={index}
                onClick={(e) => {
                  let filtred = experienceDetails.filter((ed, i) => {
                    return parseInt(e.target.id) !== i;
                  });
                  setExperienceDetails([...filtred]);
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
            setExperienceDetails([
              ...experienceDetails,
              {
                companyName: "",
                positionTitle: "",
                mainResponsibilities: "",
                fromDate: "",
                toDate: "",
                id: experienceDetails.length,
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
        data={experienceDetails}
      />
    </>
  );
}
