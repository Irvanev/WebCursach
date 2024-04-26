import { List } from 'antd';

function Archive({ archive }) {
    return (
        <List
            header={<div>Архив</div>}
            bordered
            dataSource={archive}
            renderItem={item => (
                <List.Item>
                    {item.title}
                </List.Item>
            )}
        />
    );
}

export default Archive;