import './ItemList.css';
import { Item } from '../Item/Item';
export const ItemList = () =>{
    return(
        <>
        <Item stock={6}/>
        <Item />
        <Item stock={1}/>
        <Item stock={0}/>
        </>
    )
}