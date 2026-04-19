export default function NavBtns({ currPage, setCurrPage, data }) {
  function isDataValid(data) {
    if (!data) return true;
    if (!Array.isArray(data)) {
      return Object.values(data).every(
        (item) => typeof item === "string" && item.trim() !== "",
      );
    }
    return data.every((item) =>
      Object.values(item)
        .filter((it) => typeof it === "string")
        .every((it) => it.trim() !== ""),
    );
  }

  let valid = isDataValid(data);
  if (currPage === 1) {
    return (
      <div className="flex justify-center">
        <button
          onClick={() => setCurrPage(currPage + 1)}
          disabled={!valid}
          className=" text-center bg-gray-500 px-10 py-2 rounded text-white shadow-md disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
    );
  }
  if (currPage === 4) {
    return (
      <div className="flex justify-center">
        <button
          onClick={() => setCurrPage(currPage - 1)}
          className="bg-gray-100 px-10 py-2 rounded text-gray shadow-md "
        >
          Back
        </button>
        ;
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setCurrPage(currPage - 1)}
        className="bg-gray-100 px-10 py-2 rounded text-gray shadow-md mr-4"
      >
        Back
      </button>
      <button
        onClick={() => setCurrPage(currPage + 1)}
        disabled={!valid}
        className=" text-center bg-gray-500 px-10 py-2 rounded text-white shadow-md disabled:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
}
