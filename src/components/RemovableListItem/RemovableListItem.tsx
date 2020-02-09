import React, {useState} from 'react';
import styles from './RemovableListItem.module.scss';

type RemovableListItemProps = {
    text: string,
    id: string,
    removeItem: (id: string) => void
}

const RemovableListItem: React.FC<RemovableListItemProps> = ({text, id, removeItem}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    return(
        <li className={styles.listItem}>
            <span data-iscompleted={isCompleted} className={styles.text}  onClick={() => setIsCompleted(!isCompleted)}>{text}</span>
            <button className={styles.delete} onClick={() => removeItem(id)}>X</button>
        </li>
    )
}

export default RemovableListItem;