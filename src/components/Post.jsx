import { Card, Button } from 'antd';

function Post({ post, onDelete, onArchive }) {
  return (
    <Card title={post.title}>
      <p>Автор: {post.author}</p>
      <p>Категория: {post.category}</p>
      <p>{post.content}</p>
      <Button onClick={onDelete}>Удалить</Button>
      <Button onClick={onArchive}>Архивировать</Button>
    </Card>
  );
}

export default Post;