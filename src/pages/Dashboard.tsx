/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { TIMES_REGISTREDS } from "../graphql";
import { formatDateTime } from "../utils/dateFormater";

export default function Dashboard() {
  const { data: times } = useQuery(TIMES_REGISTREDS);

  return (
    <>
      <Link to={"/"}>Voltar</Link>
      {/* {data?.users.map((user: any) => (
        <div>
          <h1 key={user.id}>{user.username}</h1>
        </div>
      ))} */}
      {times?.registeredTimes.map((time: any) => (
        <div>
          <h1 key={time.id}>
            {time.timeRegistered === null
              ? "Tempo não batido"
              : formatDateTime(time.timeRegistered)}
          </h1>
          <h2 key={time.id}>{time.user.name}</h2>
        </div>
      ))}
    </>
  );
}
