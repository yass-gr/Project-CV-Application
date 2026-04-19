import Input from "./input";

export default function EducationForm({
  setEducationDetails,
  educationDetails,
  index,
}) {
  const currentEdu = educationDetails[index] || {};

  function handleChange(fieldName, value) {
    const updated = educationDetails.map((edu, i) =>
      i === index ? { ...edu, [fieldName]: value } : edu
    );
    setEducationDetails(updated);
  }

  return (
    <div className="flex flex-col gap-2 items-center my-2">
      <Input
        name={"schoolName"}
        type={"text"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"School name"}
        value={currentEdu.schoolName || ""}
        onChange={(val) => handleChange("schoolName", val)}
      />
      <Input
        name={"titleOfStudy"}
        type={"text"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"Title of study"}
        value={currentEdu.titleOfStudy || ""}
        onChange={(val) => handleChange("titleOfStudy", val)}
      />
      <Input
        name={"dateOfStudy"}
        type={"date"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"Date of study"}
        value={currentEdu.dateOfStudy || ""}
        onChange={(val) => handleChange("dateOfStudy", val)}
      />
    </div>
  );
}
