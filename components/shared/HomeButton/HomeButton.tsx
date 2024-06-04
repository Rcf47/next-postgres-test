import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomeButton() {
  return (
    <Button asChild className="shadow-lg shadow-white">
      <Link href="/">Home</Link>
    </Button>
  );
}

export default HomeButton;
