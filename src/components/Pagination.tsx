import { Button, Flex } from "@chakra-ui/react";

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (number: number) => void;
}

export default function Pagination({
  usersPerPage,
  totalUsers,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Flex gap={1}>
        {pageNumbers.map((number) => (
          <div key={number}>
            <Button onClick={() => paginate(number)} variant={"outline"}>
              {number}
            </Button>
          </div>
        ))}
      </Flex>
    </nav>
  );
}
