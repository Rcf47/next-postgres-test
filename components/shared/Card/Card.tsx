import { getUsers } from "@/lib/prisma/functions";

const Card = async () => {
  const users = await getUsers();
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="flex gap-2 border p-2 w-48">
            <div className="w-16 bg-sky-50">{user.name}</div>
            <div className="w-[450px] bg-red-300">{user.surname}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
