import { Form, Input, Button } from 'antd';

function PostForm({ onSubmit }) {
    return (
        <Form name="postForm" onFinish={onSubmit}>
            <Form.Item name="author" rules={[{ required: true, message: 'Пожалуйста, введите автора!' }]}>
                <Input placeholder="Автор" />
            </Form.Item>
            <Form.Item name="title" rules={[{ required: true, message: 'Пожалуйста, введите заголовок!' }]}>
                <Input placeholder="Заголовок" />
            </Form.Item>
            <Form.Item name="category" rules={[{ required: true, message: 'Пожалуйста, введите категорию!' }]}>
                <Input placeholder="Категория" />
            </Form.Item>
            <Form.Item name="content" rules={[{ required: true, message: 'Пожалуйста, введите содержание!' }]}>
                <Input.TextArea placeholder="Содержание" autoSize={{ minRows: 2, maxRows: 5 }} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PostForm;