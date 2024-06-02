import AddDataForm from "@/components/shared/AddDataForm/AddDataForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AddData() {
  return (
    <main>
      <div>
        <Button asChild className="shadow-lg shadow-white">
          <Link href="/">Home</Link>
        </Button>
        <AddDataForm />
      </div>
    </main>
  );
}

export default AddData;
