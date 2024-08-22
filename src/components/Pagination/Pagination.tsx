import { usePokemonContext } from "../../context/PokedexContext";
import { Button, PaginationContainer } from "./style";

const Pagination = () => {
  const { currentPage, totalPages, setCurrentPage } = usePokemonContext();

  console.log(currentPage, "currentPage")
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  return (
    <PaginationContainer>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
