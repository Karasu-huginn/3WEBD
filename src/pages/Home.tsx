const Home = () => {
  const changesData = [
    {
      id: "164764179",
      kind: "edit-book",
      timestamp: "2026-02-01T10:36:16.301794",
      comment: "import existing book",
      changes: [{ key: "/books/OL34931546M", revision: 3 }],
      author: { key: "/people/horncBot" },
      ip: null,
      data: {},
    },
    {
      id: "164764178",
      kind: "edit-book",
      timestamp: "2026-02-01T10:36:14.913921",
      comment: "import existing book",
      changes: [{ key: "/books/OL47962146M", revision: 2 }],
      author: { key: "/people/horncBot" },
      ip: null,
      data: {},
    },
  ];
  console.log(changesData[0]);
  return (
    <div className="min-h-screen md:px-30 px-10 md:py-20 py-10">
      {/**Recent Changes */}
      <div className="">
        <h1 className="text-2xl font-bold">Recent Changes</h1>
        <p className="text-gray-600">Latest updates to the library</p>

        {/**Card */}
        <div className="w-full border border-gray-400">
          {changesData.length === 0 ? (
            <div className="flex items-center justify-center">
              <p>No recent changes</p>
            </div>
          ) : (
              <div>
                <table className="w-full">
                  <thead className="border-b border-gray-400">
                    <tr>
                      <th className="text-left p-4">Type</th>
                      <th className="text-left p-4">Document</th>
                      <th className="text-left p-4">When</th>
                    </tr>
                  </thead>
                  <tbody>
                    {changesData.map((change) => (
                      <tr key={change.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-4">{change.kind}</td>
                        <td className="p-4">{change.changes[0].key}</td>
                        <td className="p-4">{new Date(change.timestamp).toLocaleString()}</td>
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
