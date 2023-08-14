import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";

export interface IPost {
  id: number;
  title: string;
  timePublic: string;
  image: string;
  content: string;
  like: number;
  dislike: number;
}

const App: React.FC = () => {
  //khởi tạo ra trạng thái của một component
  const [count, setCount] = useState<number>(0);
  console.log("aaaa");

  //xử lý tăng giảm 1 con số
  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount((prevCount: number) => prevCount + 1);
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount((prevCount: number) => prevCount - 1);
  };

  /**
   * tạo những bài post để render ra giao diện và nó có nút like, nút dislike => simple
   */
  //khởi tạo  type

  //khởi tạo data
  const dataPost: IPost[] = [
    {
      id: 1,
      title: "Treo đầu dê bán thịt chó",
      timePublic: "3 phút trước",
      image: "https://picsum.photos/seed/picsum/200/300",
      content: "nói một đằng nói một lẻo, ba chấm ba chấm",
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      title: "Cam kết đầu ra",
      timePublic: "3 phút trước",
      image: "https://picsum.photos/seed/picsum/200/300",
      content: "nói một đằng nói một lẻo, ba chấm ba chấm",
      like: 0,
      dislike: 0,
    },
    {
      id: 3,
      title: "Em chỉ onsite một tháng thôi",
      timePublic: "3 phút trước",
      image: "https://picsum.photos/seed/picsum/200/300",
      content: "nói một đằng nói một lẻo, ba chấm ba chấm",
      like: 0,
      dislike: 0,
    },
  ];

  //state cua post
  const [post, setPost] = useState<IPost[]>(dataPost);

  //xu ly tang like
  const handleIncrementLike = (id: number): void => {
    //cach 1
    const findId = post.findIndex((post: IPost) => post.id === id);
    const dataUpdate = (post[findId].like = post[findId].like + 1);
    console.log("data", dataUpdate);
    setPost([...post]);
    //cach cua chatgpt
    setPost((prevPosts) => {
      return prevPosts.map((postItem) => {
        if (postItem.id === id) {
          return { ...postItem, like: postItem.like + 1 };
        }
        return postItem;
      });
    });
    // cach cua clauai
    const postIndex = post.findIndex((p) => p.id === id);

    const updatedPost = {
      ...post[postIndex],
      like: post[postIndex].like + 1,
    };

    const updatedPosts = [
      ...post.slice(0, postIndex),
      updatedPost,
      ...post.slice(postIndex + 1),
    ];

    console.log("updated data", updatedPost);
    setPost(updatedPosts);
  };

  return (
    <>
      <h2> Learn State </h2>
      {count ? <p>{count}</p> : <p>chưa có giá trị</p>}
      <button onClick={handleIncrement}>Tăng lên</button>
      <button onClick={handleDecrement}>Giảm Đi</button>
      <hr />
      <h2> Learn Props </h2>
      <div className="" style={{ width: "100%", display: "flex", gap: "20px" }}>
        <Post
          postDataProps={post}
          name={" bui van vu"}
          onLikeProps={handleIncrementLike}
        />
      </div>
    </>
  );
};

export default App;
