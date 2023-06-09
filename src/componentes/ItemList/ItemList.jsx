import { Item } from "../ITem/Item"
import './ItemList.css'

export const ItemList = ({ list }) =>
    <div className="container row col-md">

            {!list.length && 'Loading. . .'}
            {list.map(item => (
                <Item key={item.id} item={item} />
            ))}
    </div>
