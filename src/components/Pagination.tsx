import { Button, Flex, Img } from "@chakra-ui/react";

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  paginate: (number: number) => void;
}

export default function Pagination({
  usersPerPage,
  totalUsers,
  currentPage,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Flex gap={1}>
        <Button
          onClick={() => paginate(currentPage - 1)}
          variant={"outline"}
          isDisabled={currentPage === 1 ? true : false}
        >
          <Img src="./arrowleft.svg" />
        </Button>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            onClick={() => paginate(number)}
            variant={"outline"}
            colorScheme={currentPage === number ? "pontogo" : "gray"}
          >
            {number}
          </Button>
        ))}
        <Button
          onClick={() => paginate(currentPage + 1)}
          variant={"outline"}
          isDisabled={
            currentPage === Math.ceil(totalUsers / usersPerPage) ? true : false
          }
        >
          <Img src="./arrowright.svg" />
        </Button>
      </Flex>
    </nav>
  );
}
