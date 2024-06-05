import DataForm from "@/components/shared/DataForm/DataForm";
import HomeButton from "@/components/shared/HomeButton/HomeButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AddData() {
  return (
    <main>
      <div>
        <HomeButton />
        <h1 className="text-center text-4xl text-white">Add data</h1>
        <DataForm userId="" type="add" />
      </div>
    </main>
  );
}

export default AddData;
