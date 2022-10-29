import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostLimitsQuery,
  useUpdatePostMutation,
} from "./services/Post";

function App() {
  // const { data, isError, isLoading, error } = useGetAllPostQuery();
  // const { data: post, isError, isLoading, error } = useGetPostByIdQuery(5);
  const { data: posts, isError, isLoading, error } = useGetPostLimitsQuery(7);
  const [deletePost, res] = useDeletePostMutation();
  const [createPost, response] = useCreatePostMutation();
  const [updatePost, data] = useUpdatePostMutation();
  console.log(posts);
  console.log("error", data.isError);
  console.log("loading", data.isLoading);
  console.log("success", data.isSuccess); //clicking on delete button below will delete and here success will become true which will reflect that it is successfully deleted

  const body = {
    title: "My name is Zahid",
    id: 5,
    body: "I am React Developer",
  };
  const updatebody = {
    id: 2,
    title: "My name is Updated Zahid",
    id: 5,
    body: "I am Updated React Developer",
  };

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
        {/* {posts.map((post, i) => (
          <div key={i}>
            <span>
              {post.id} . <strong>{post.title}</strong>
            </span>
            <p>{post.body}</p> */}

        {/* delete operation */}

        {/* <button onClick={() => deletePost(2)}>Delete</button>
          </div>
        ))} */}
      </div>
      {/* Create post  */}
      {/* 
      <div>
        <h2>Create post</h2>
        <button onClick={() => createPost(body)}>Add post</button>
      </div>
    </div> */}

      {/* Update post */}
      <div>
        <h2>Create post</h2>
        <button onClick={() => updatePost(updatebody)}>Update post</button>
      </div>
    </div>
  );
}

export default App;
