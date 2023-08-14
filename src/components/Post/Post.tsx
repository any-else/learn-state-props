import React from "react";
import "./Post.css";
import { IPost } from "../../App";
//bắt buộc phải khai báo
interface IProps {
  postDataProps: IPost[];
  name: string;
  onLikeProps: (id: number) => void;
}
const Post: React.FC<IProps> = (props: IProps) => {
  const { postDataProps, onLikeProps } = props;
  console.log("onLikeProps", onLikeProps);

  const handleIdLike = (id: number) => {
    onLikeProps(id);
  };
  return (
    <>
      {postDataProps &&
        postDataProps.map((post: IPost) => {
          return (
            <div className="post-container" key={post.title}>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-meta">{post.timePublic}</p>
              <img src={post.image} alt="Hình ảnh bài viết" />
              <p className="post-content">{post.content}</p>
              <div
                className="post-like"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "green",
                    color: "white",
                    width: "100px",
                  }}
                  onClick={() => handleIdLike(post.id)}
                >
                  like {post.like == 0 ? "" : post.like}
                </button>
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "red",
                    color: "white",
                    width: "100px",
                  }}
                >
                  dislike {post.dislike == 0 ? "" : post.dislike}
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Post;
