export default function CurrPageIndicator({ currPage }) {
  return (
    <main>
      <div className="flex justify-center gap-5 py-2">
        <div
          className={`${currPage === 1 ? "bg-gray-500" : "bg-gray-300"} w-20 rounded-lg h-2`}
        ></div>
        <div
          className={`${currPage === 2 ? "bg-gray-500" : "bg-gray-300"} w-20 rounded-lg h-2`}
        ></div>
        <div
          className={`${currPage === 3 ? "bg-gray-500" : "bg-gray-300"} w-20 rounded-lg h-2`}
        ></div>
        <div
          className={`${currPage === 4 ? "bg-gray-500" : "bg-gray-300"} w-20 rounded-lg h-2`}
        ></div>
      </div>
    </main>
  );
}
