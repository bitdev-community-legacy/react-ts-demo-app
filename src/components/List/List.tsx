import React from 'react';
import styles from './List.module.scss';
import RemovableListItem from '../RemovableListItem';

type ListProps = {
    items: {text: string, key: string}[],
    removeItem: (key:string) => void
}

const List: React.FC<ListProps> = ({items, removeItem}) => {
    return (
        <ul className={styles.list}>
            {items.map(item =>  
                <RemovableListItem text={item.text} id={item.key} removeItem={removeItem}/>   
            )}
        </ul>
    )
  }

  export default List;