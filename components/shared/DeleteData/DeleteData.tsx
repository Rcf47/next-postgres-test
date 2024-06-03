"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function DeleteData({ userId }: { userId: number }) {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await fetch(`/api/delete-data/${userId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.error(`eror from component: ${error}`);
    }
  };
  return (
    <Image
      src="/assets/icons/trash.svg"
      alt="trash"
      width={24}
      height={24}
      className="hover:cursor-pointer"
      onClick={handleClick}
    />
  );
}

export default DeleteData;
