import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const editPost = (postId, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postId ? { ...post, ...updatedPost } : post))
    );
  };

  const addFavorite = (post) => {
    if (!favorites.some((fav) => fav.id === post.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, post]);
    }
  };

  const removeFavorite = (postId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== postId));
  };

  const isFavorite = (postId) => {
    return favorites.some((fav) => fav.id === postId);
  };

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

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("posts", JSON.stringify(posts));
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
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
