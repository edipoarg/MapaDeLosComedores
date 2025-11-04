import React from "react";
import styles from "./Entrevistas.module.css";

const entrevistasData = [
    {
        nombre: "Graciela - Responsable del comedor de Atuel",
        video: "https://video.wixstatic.com/video/81c26f_bac0020f7f9a4515bbaf1ee22fba49bf/1080p/mp4/file.mp4",
        descripcion: `Empezó cocinando en su casa para personas en situación de calle y hoy el comedor entrega entre 200 y 250 raciones diarias. En el último tiempo notaron cambios en quienes se acercan: además de personas sin techo, ahora vienen más niños y jubilados que tienen vivienda pero no les alcanza para alimentarse. El comedor funciona todos los días, aunque los recursos no son suficientes. Con rifas y colectas intentan cubrir lo que falta.`,
    },
    {
        nombre: "Jubilado de 74 años",
        video: "https://video.wixstatic.com/video/81c26f_207baf1c10884f04a6a3cc7bcd84e147/1080p/mp4/file.mp4",
        descripcion: `Vive en una pensión junto a sus dos hijos, uno de ellos con discapacidad. Con su jubilación y pensión no llega a cubrir alquiler y comida, sobre todo con precios que aumentan todo el tiempo y con ingresos que no alcanzan. Desde hace un año, el comedor del barrio es el lugar al que acude todos los días. Lo valora por la comida, pero también por la cercanía y el trato.`,
    },
    {
        nombre: "Roxana - Comedor Rincón de Luz",
        video: "https://video.wixstatic.com/video/0f4ca0_4eee2dff96a74a79afc3c94fc9e4c8c3/1080p/mp4/file.mp4",
        descripcion: `Todo empezó como un merendero de barrio en 2016. Con el tiempo, el espacio creció y hoy reparten entre 500 y 600 raciones por día, funciona un centro de jubilados, además de sostener una merienda y actividades educativas y deportivas para niños y jóvenes. Para Roxana, el comedor es un trabajo compartido que se sostiene en equipo y con esfuerzo cotidiano.`,
    },
    {
        nombre: "Marta - Jubilada",
        video: "https://video.wixstatic.com/video/81c26f_f0c772f3ab314c808a6ae157397a05be/1080p/mp4/file.mp4",
        descripcion: `Por primera vez en su vida se acercó a un comedor cuando ya no pudo cubrir su alquiler. En el centro de jubilados encontró además un espacio de compañía y actividades culturales. Dice que nunca antes había necesitado recurrir a un comedor, pero que hoy la situación la obligó. Su pedido es simple: que la ayuda llegue de manera más equitativa, “un poco para todos”.`,
    },
];

const Entrevistas = () => {
    return (
        <div className={styles.fullWidthBlock}>
            {/* Bloque de encabezado */}
            <div className={styles.headerBlock}>
                <h2>Cuando la jubilación no alcanza:</h2>
                <h4>el nuevo rostro de los comedores populares en la Ciudad de Buenos Aires</h4>
                <p className={styles.description}>
                    Desde el Mapa de los Comedores recorrimos distintos espacios alimentarios de la Ciudad de Buenos Aires para escuchar a quienes los sostienen y a quienes recurren a ellos. Estos espacios son imprescindibles para la vida de miles de personas y, en el último tiempo, especialmente para jubilados y jubiladas.
                </p>
            </div>

            {/* Bloque de entrevistas */}
            <div className={styles.gridContainer}>
                {entrevistasData.map((item, index) => (
                    <div key={index} className={styles.entrevista}>
                        <video controls className={styles.video}>
                            <source src={item.video} type="video/mp4" />
                            Tu navegador no soporta la reproducción de video.
                        </video>
                        <div className={styles.textContent}>
                            <h3>{item.nombre}</h3>
                            <p>{item.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Conclusión */}
            <div className={styles.conclusionBlock}>
                <p>
                    Los relatos muestran la magnitud de la crisis actual: ingresos que no alcanzan, precios de alimentos y alquileres desbordados, y una creciente cantidad de personas que dependen de la asistencia comunitaria. Al mismo tiempo, dejan en evidencia la centralidad de los comedores como espacios de organización, contención y cuidado cotidiano.
                </p>
                <p>
                    Con el Mapa de los Comedores buscamos visibilizar estas experiencias, dar lugar a quienes las sostienen y aportar herramientas para que la sociedad y el Estado pueda dimensionar la importancia de estos espacios en la vida de miles de personas.
                </p>
            </div>
        </div>
    );
};

export default Entrevistas;