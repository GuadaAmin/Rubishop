// import React from 'react';
// import data from '../ItemList/mockData';
// import ItemDetail from '../ItemDetail/ItemDetail';

// const ItemDetailContainer = () => {
//     const [items, setItems] = useState([]);

//     const getItem = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(data);
//             }, 2000);
//         });
//     };

//     useEffect(() => {
//         getItem.then((result) => {
//             setItems(result);
//         })
//     }, []);

//     return (
//         <div className="itemListContainer">
//             <ItemDetail ItemDetail={items}/>
//             <ItemCount nombreProducto="Cubo 3×3×3" stock="10" initial="1" />
//         </div>
//     );
// }

// export default ItemDetailContainer;