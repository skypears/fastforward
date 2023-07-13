("use client");
import { useRouter } from "next/navigation";

export default function Partners() {
  const router = useRouter();
  router.push("./Customers");
}
