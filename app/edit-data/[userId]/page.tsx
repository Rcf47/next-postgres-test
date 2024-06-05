import DataForm from "@/components/shared/DataForm/DataForm";
import HomeButton from "@/components/shared/HomeButton/HomeButton";

function EditData({ params }: { params: { userId: string } }) {
  return (
    <>
      <HomeButton />
      <h1 className="text-center text-4xl text-white">Edit data</h1>
      <DataForm type="edit" userId={params.userId} />
    </>
  );
}
export default EditData;
