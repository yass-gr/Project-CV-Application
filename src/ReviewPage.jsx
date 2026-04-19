import NavBtns from "./NavBtns";
import "./ReviewPage.css";

function downloadPdf() {
  window.print();
}

export default function ReviewPage({
  currPage,
  setCurrPage,
  genDetails,
  educationDetails,
  experienceDetails,
}) {
  return (
    <div id="main" className="px-20">
      <h1 className="text-2xl text-gray-600 font-bold text-center">Review</h1>
      <div id="cv" className=" shadow-md p-10 py-10 mb-5">
        <h1 className="text-center text-4xl py-3 pb-10 font-bold">
          Curriculum vitae
        </h1>
        <div>
          <h2 className="text-gray-600 text-2xl font-bold text-center">
            General informations
          </h2>

          <p className="text-gray-500 text-sm">
            <span className="text-black">First name: </span>
            {genDetails.firstName}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="text-black">Last name: </span>
            {genDetails.lastName}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="text-black">Email: </span>
            {genDetails.email}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="text-black">Number: </span>
            {genDetails.number}
          </p>
        </div>

        <div>
          <h2 className="text-gray-600 text-2xl font-bold text-center">
            Education Details
          </h2>

          {educationDetails.map((d) => {
            return (
              <div className="my-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    <span className="text-black">School name: </span>
                    {d.schoolName}
                  </p>
                  <span className="text-xs text-gray-500">{d.dateOfStudy}</span>
                </div>
                <p className="text-gray-500 text-sm">
                  <span className="text-black">Title of study: </span>
                  {d.titleOfStudy}
                </p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="text-gray-600 text-2xl font-bold text-center">
            Experience Details
          </h2>

          {experienceDetails.map((d) => {
            return (
              <div className="my-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    <span className="text-black">Company name: </span>
                    {d.companyName}
                  </p>
                  <span className="text-xs text-gray-500">
                    {d.fromDate} - {d.toDate}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  <span className="text-black">Position title: </span>
                  {d.positionTitle}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="text-black">main responsibilities: </span>
                  {d.mainResponsibilities}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center  my-4">
        <button
          onClick={() => downloadPdf()}
          className="bg-teal-600 text-white px-10 py-2 rounded-xl "
        >
          Download CV
        </button>
      </div>
      <NavBtns currPage={currPage} setCurrPage={setCurrPage} />
    </div>
  );
}
