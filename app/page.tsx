import Card from "@/components/shared/Card/Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Card />
        <Button asChild className="mt-2">
          <Link href="/add-data">Add data</Link>
        </Button>
      </div>
    </>
  );
}
