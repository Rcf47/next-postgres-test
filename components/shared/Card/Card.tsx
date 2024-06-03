import DeleteData from "@/components/shared/DeleteData/DeleteData";
import { getUsers } from "@/lib/prisma/functions";
import Image from "next/image";
import Link from "next/link";

const Card = async () => {
  const users = await getUsers();
  return (
    <div className="flex gap-4 flex-wrap">
      {users.map((user) => {
        return (
          <div key={user.id} className="flex gap-2 border p-2 items-start">
            <div className="w-16 bg-sky-50">{user.name}</div>
            <div className="w-[250px] bg-red-300">{user.surname}</div>
            <DeleteData userId={user.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
