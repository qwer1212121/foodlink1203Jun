import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); // 게시물 상태
  const [favorites, setFavorites] = useState([]); // 찜 목록 상태

  // 게시물 추가
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // 게시물 삭제
  const deletePost = (postId) => {
    console.log("Attempting to delete postId:", postId);

    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.filter((post) => post.id !== postId);
      console.log("Updated Posts:", updatedPosts);
      return updatedPosts;
    });

    // 찜 목록에서 해당 게시물 동기화
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((fav) => fav.id !== postId);
      console.log("Updated Favorites:", updatedFavorites);
      return updatedFavorites;
    });
  };

  // 게시물 수정
  const editPost = (postId, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      )
    );
  };

  // 찜 추가
  const addFavorite = (post) => {
    if (!favorites.some((fav) => fav.id === post.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, post]);
    }
  };

  // 찜 제거
  const removeFavorite = (postId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== postId)
    );
  };

  // 찜 확인
  const isFavorite = (postId) => {
    return favorites.some((fav) => fav.id === postId);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        deletePost,
        editPost,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
