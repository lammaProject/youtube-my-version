import { useRouter } from "next/router";
import axios from "axios";

export default function Custom404() {
  const router = useRouter();

  if (router.asPath.startsWith("/google/callback")) {
    axios.post("/api/auth", {
      url: router.asPath,
    });
  }

  return (
    <div>
      <h1>400 - Server-side error occurred</h1>
    </div>
  );
}
