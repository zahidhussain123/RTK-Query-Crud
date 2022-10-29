import {
  useDeletePostMutation,
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostLimitsQuery,
} from "./services/Post";

function App() {
  // const { data, isError, isLoading, error } = useGetAllPostQuery();
  // const { data: post, isError, isLoading, error } = useGetPostByIdQuery(5);
  const { data: posts, isError, isLoading, error } = useGetPostLimitsQuery(7);
  const [deletePost, res] = useDeletePostMutation();
  console.log(posts);
  console.log("error", res.isError);
  console.log("loading", res.isLoading);
  console.log("success", res.isSuccess); //clicking on delete button below will delete and here success will become true which will reflect that it is successfully deleted
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2> {error.error}</h2>;
  }
  return (
    <div className="App">
      <h1>RTK-Query</h1>

      {/* Fetching all data  */}

      {/* <h2>Retreiving all user Data </h2>
      {data.map((item) => (
        <div key={item.id}>
          <span>
            {item.userId} . <strong>{item.title}</strong>
          </span>

          <p>{item.body}</p>
          <hr />
        </div>
      ))} */}

      {/* Fetching only one data using Id */}

      {/* <h2>Retreiving Only one data</h2>
      <div>
        <span>
          {post.id} . <strong>{post.title}</strong>
        </span>
        <p>{post.body}</p>
      </div> */}

      {/* Fetching limited data from server */}

      <h2>Retreiving limited Data</h2>
      <div>
        {posts.map((post, i) => (
          <div key={i}>
            <span>
              {post.id} . <strong>{post.title}</strong>
            </span>
            <p>{post.body}</p>

            {/* delete operation */}

            <button onClick={() => deletePost(2)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
