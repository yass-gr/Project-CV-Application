import GeneralDetailsPage from "./GeneralDetailsPage";

export default function CurrPage({ currPage }) {
  if (currPage === 1) {
    return <GeneralDetailsPage />;
  }
}
