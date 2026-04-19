import Input from "./input";
import NavBtns from "./NavBtns";

export default function GeneralDetailsPage({
  currPage,
  setCurrPage,
  genDetails,
  setGenDetails,
}) {
  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-2 items-center my-3"
    >
      <Input
        name={"firstName"}
        type={"text"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"First Name"}
        state={genDetails}
        setState={setGenDetails}
      />
      <Input
        name={"lastName"}
        type={"text"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"Last Name"}
        state={genDetails}
        setState={setGenDetails}
      />
      <Input
        name={"email"}
        type={"email"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"Email"}
        state={genDetails}
        setState={setGenDetails}
      />
      <Input
        name={"number"}
        type={"number"}
        className={"border w-2/5 rounded py-1 pl-2"}
        placeholder={"Number"}
        state={genDetails}
        setState={setGenDetails}
      />
      <NavBtns
        currPage={currPage}
        setCurrPage={setCurrPage}
        data={genDetails}
      />
    </form>
  );
}
