import React, { useState, useEffect } from 'react';
import { Flex, Layout } from 'antd';
import styles from './App.module.css'
import Post from './components/Post';
import PostForm from './components/PostForm';
import Archive from './components/Archive';
import { getPosts, getArchive, savePosts, saveArchive } from './services/postService';

const { Header, Content } = Layout;

function App() {
  const [posts, setPosts] = useState(getPosts());
  const [archive, setArchive] = useState(getArchive());

  const onSubmit = (values) => {
    setPosts([...posts, values]);
  };

  const handleDelete = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  const handleArchive = (index) => {
    const newPosts = [...posts];
    const archivedPost = newPosts.splice(index, 1);
    setPosts(newPosts);
    setArchive([...archive, ...archivedPost]);
  };

  useEffect(() => {
    savePosts(posts);
    saveArchive(archive);
  }, [posts, archive]);

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <Header className={styles.header}>Блог</Header>
        <Content className={styles.main}>
          <div className={styles.box}>
            <div className={styles.contentPost}>
              <h3 className={styles.title}>Здесь будет форма</h3>
              {posts.map((post, index) => (
                <Post key={index} post={post} onDelete={() => handleDelete(index)} onArchive={() => handleArchive(index)} />
              ))}
            </div>
          </div>
          <div className={styles.addingForm}>
            <div className={styles.contentPost}>
              <h3 className={styles.title}>Здесь будет форма</h3>
              <PostForm onSubmit={onSubmit} />
              <Archive archive={archive} />
            </div>
          </div>
        </Content>
      </Layout>
    </Flex>
  );
}

export default App;
