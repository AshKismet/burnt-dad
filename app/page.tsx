import { redirect } from "next/navigation";

export default function Home() {
  if (process.env.COMING_SOON === "true") {
    return <p>Coming soon</p>;
  }

  redirect("/home");
}
