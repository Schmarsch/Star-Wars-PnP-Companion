import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    return <div>Not logged in</div>;
  }


  const allCharacters = await api.character.getAll.query();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-1/4">Name</th>
              <th>XP</th>
              <th className="w-64"></th>
            </tr>
          </thead>
          <tbody>
            {/* body */}
            {allCharacters.map((character) => (
              <tr key={character.id}>
                <td>{character.name}</td>
                <td>
                  {character.TotalXP} / <span className="text-green-500">{character.AvailableXP}</span>
                </td>
                <td>Link to {character.name} Page</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
