import BookTitle from "../components/BookTitle";
import { useRecentChanges } from "../hooks/useRecentChanges";
import { timeAgo } from "../utils/timeAgo";

const Home = () => {
  const { data, isPending, error } = useRecentChanges(10);

  return (
    <div className="min-h-screen md:px-30 px-10 md:py-20 py-10">
      {/**Recent Changes */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Recent Changes</h1>
        <p className="text-gray-600">Latest updates to the library</p>

        {/**Card */}
        <div className="mt-5 w-full border rounded-2xl border-gray-400">
          {isPending ? (
            <div className="flex items-center justify-center p-8">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center p-8">
              <p className="text-red-500">{error.message}</p>
            </div>
          ) : !data ? (
            <div className="flex items-center justify-center">
              <p>No recent changes</p>
            </div>
          ) : (
            <div>
              <table className="w-full">
                <thead className="border-b border-gray-400">
                  <tr>
                    <th className="text-left p-4">Type</th>
                    <th className="text-left p-4">Book</th>
                    <th className="text-left p-4">When</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((change) => (
                    <tr
                      key={change.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-4">{change.kind}</td>
                      <td className="p-4">
                        <BookTitle bookKey={change.changes[0].key} />
                      </td>
                      <td className="p-4">{timeAgo(change.timestamp)} ago</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
