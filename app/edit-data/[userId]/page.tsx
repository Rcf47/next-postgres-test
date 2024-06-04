import DataForm from "@/components/shared/DataForm/DataForm";
import HomeButton from "@/components/shared/HomeButton/HomeButton";
import { Data } from "@/types";

function EditData() {
  return (
    <>
      <HomeButton />
      <h1 className="text-center text-4xl text-white">Edit data</h1>
      <DataForm type="edit" />
    </>
  );
}
export default EditData;
