import BurntDadApp from "./components/BurntDadApp";

export default function Home() {
  if (process.env.COMING_SOON === "true") {
    return <p>Coming soon</p>;
  }

  return <BurntDadApp />;
}
