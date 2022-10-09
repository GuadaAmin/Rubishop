import React from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from '../../utils/firebase';

const ItemListContainer = () => {
    const {categoria} = useParams();

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async() => {
            if(categoria) {
                const queryRef = query(collection(database, "items"), where("categoria", "==", categoria))
                const response = await getDocs(queryRef)
                const data = response.docs.map ( doc => {
                    const items = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return items;
                })
                setItems(data);
            } else {
                const queryRef = query(collection(database, "items"))
                const response = await getDocs(queryRef)
                const data = response.docs.map ( doc => {
                    const items = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return items;
                })
                setItems(data);
            }
        }
        getData()
    }, [categoria])

    return (
        <div className="itemListContainer">
            {!items ? (<h3>Cargando...</h3>) : 
            (<div>
                {categoria ?
                <h2 className="elementoCentrado titulos">{categoria}</h2>
                :
                <div>
                    <h1 className="elementoCentrado titulos">Rubishop</h1>
                    <a href="#catalogo" className="elementoCentrado">
                        <img src="https://foreignpolicyi.org/wp-content/uploads/2021/12/What-are-the-various-types-of-Rubiks-cubes-870x721.jpg" className="fotoIndex" alt="cubos de rubik de muchas variedades" />
                    </a>
                    <div>
                        <h3 className="elementoCentrado">¿Qué son los cubos de Rubik?</h3>
                        <div className="elementoCentrado">
                            <p className="elementoCentrado textoI">Los cubos de Rubik son rompecabezas mecánicos en forma de cubo, donde cada una de las caras tiene un color diferente. El objetivo del rompecabezas es lograr que cada cara del cubo contenga un solo color.</p>
                        </div>
                        <h3 className="elementoCentrado">¿Cómo fueron inventados?</h3>
                        <div className="elementoCentrado">
                            <p className="elementoCentrado textoI">El cubo fue originalmente construido por Ernő Rubik como herramienta escolar: sus estudiantes debían resolver el problema estructural de manera que se pudiera mover las partes independientemente sin que el mecanismo entero se desmorone. Rubik no se dio cuenta de que había creado un rompecabezas hasta que intentó volverlo a su posición original.</p>
                        </div>
                        <h3 className="elementoCentrado">¿Qué es "speedcubing"?</h3>
                        <div className="elementoCentrado">
                            <p className="elementoCentrado textoI">"Speedcubing" se refiere a una actividad que llevan a cabo los aficionados de los cubos de Rubik, que se centra en resolver estos rompecabezas en el menor tiempo posible. Los mejores speedcubers del mundo pueden resolverlos en menos de 4 segundos, incluso llegando a realizar más de 10 movimientos por segundo.</p>
                        </div>
                        <h2 className="elementoCentrado titulos" id="catalogo">Nuestro catálogo:</h2>
                    </div>
                </div>
                }
                <ItemList itemsList={items}/>
            </div>
            )}
        </div>
    );
}


export default ItemListContainer;