import Input from "./input";
import TextArea from "./textArea";

export default function ExperienceForm({
  setExperienceDetails,
  experienceDetails,
  index,
}) {
  const currentExp = experienceDetails[index] || {};

  function handleChange(fieldName, value) {
    const updated = experienceDetails.map((exp, i) =>
      i === index ? { ...exp, [fieldName]: value } : exp
    );
    setExperienceDetails(updated);
  }

  return (
    <div className="flex flex-col gap-2  my-2 items-center">
      <Input
        name={"companyName"}
        type={"text"}
        className={"border w-2/5 rounded py-1 pl-2 "}
        placeholder={"Company name"}
        value={currentExp.companyName || ""}
        onChange={(val) => handleChange("companyName", val)}
      />
      <Input
        name={"positionTitle"}
        type={"text"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"Position title"}
        value={currentExp.positionTitle || ""}
        onChange={(val) => handleChange("positionTitle", val)}
      />
      <TextArea
        name={"mainResponsibilities"}
        type={""}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"Main responsibilities"}
        value={currentExp.mainResponsibilities || ""}
        onChange={(val) => handleChange("mainResponsibilities", val)}
      />
      <Input
        name={"fromDate"}
        label={"From Date"}
        labelClass={"w-2/5 text-sm text-gray-700"}
        type={"date"}
        className={"border w-2/5 rounded py-1 pl-2 "}
        placeholder={"From date"}
        value={currentExp.fromDate || ""}
        onChange={(val) => handleChange("fromDate", val)}
      />
      <Input
        name={"toDate"}
        type={"date"}
        label={"To Date"}
        labelClass={"w-2/5 text-sm text-gray-700"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"To date"}
        value={currentExp.toDate || ""}
        onChange={(val) => handleChange("toDate", val)}
      />
    </div>
  );
}
