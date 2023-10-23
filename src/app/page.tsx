import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const allCharacters = await api.character.getAll.query();

  return <div>{JSON.stringify(allCharacters)}</div>;
}
