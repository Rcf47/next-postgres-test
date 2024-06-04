"use client";

import Image from "next/image";
import Link from "next/link";

function EditData({ userId }: { userId: number }) {
  return (
    <Link href={`/edit-data/${userId}`}>
      <Image
        src="/assets/icons/edit.svg"
        alt="edit"
        width={24}
        height={24}
        className="hover:cursor-pointer"
      />
    </Link>
  );
}

export default EditData;
