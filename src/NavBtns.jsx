export default function NavBtns({ currPage, setCurrPage }) {
  if (currPage === 1) {
    return (
      <div className="flex justify-center">
        <button
          onClick={() => setCurrPage(currPage + 1)}
          className=" text-center bg-gray-500 px-10 py-2 rounded text-white shadow-md"
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
          className="bg-gray-100 px-10 py-2 rounded text-gray shadow-md"
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
        className="bg-gray-500 px-10 py-2 rounded text-white shadow-md"
      >
        Next
      </button>
    </div>
  );
}
