import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // 게시물 추가
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // 게시물 삭제 (수정된 코드)
  const deletePost = (postId) => {
    console.log("Attempting to delete postId:", postId);

    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.filter((post) => post.id !== postId);
      console.log("Updated Posts:", updatedPosts);
      return updatedPosts;
    });

    // 바로 찜 목록에서 삭제된 게시물 동기화
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

  // 로컬 데이터 로드
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedPosts = await AsyncStorage.getItem("posts");
        if (storedPosts) {
          setPosts(JSON.parse(storedPosts));
        }
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  // 로컬 데이터 저장
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("posts", JSON.stringify(posts));
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
        console.log("Saved data to AsyncStorage:", { posts, favorites });
      } catch (error) {
        console.error("Error saving data:", error);
      }
    };

    saveData();
  }, [posts, favorites]);

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
