import { useState, useEffect } from 'react';
import comedores from "../data/comedores.json"; // Importar datos de comedores
import styles from './Informes.module.css';

function Informes() {
  const [totalComedores, setTotalComedores] = useState(0);
  const [tiposComedores, setTiposComedores] = useState({});
  const [tamanosComedores, setTamanosComedores] = useState({ small: 0, medium: 0, large: 0 });
  const [comedorPorBarrio, setComedorPorBarrio] = useState({});

  useEffect(() => {
    // Calcular total de comedores y el desglose por tipo
    const tipos = {};
    const tamanos = { small: 0, medium: 0, large: 0 };
    const barrios = {};

    comedores.forEach(comedor => {
      // Calcular total y tipos
      setTotalComedores(prevTotal => prevTotal + 1);

      const tipo = comedor["Tipo de espacio"];
      tipos[tipo] = (tipos[tipo] || 0) + 1;

      // Calcular tamaño según raciones diarias
      const racionesDiarias = comedor["Cuantas raciones diarias entrega?"];
      let size;
      if (racionesDiarias <= 100) size = "small";
      else if (racionesDiarias <= 500) size = "medium";
      else size = "large";
      tamanos[size] = tamanos[size] + 1;

      // Calcular cantidad por barrio
      const barrio = comedor["Barrio"];
      barrios[barrio] = (barrios[barrio] || 0) + 1;
    });

    // Establecer el estado
    setTiposComedores(tipos);
    setTamanosComedores(tamanos);
    setComedorPorBarrio(barrios);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <h1 className={styles.title}>DATOS & INFORMES</h1>
        <p className={styles.description}>
          Información detallada de los comedores, tipos y tamaños.
        </p>

        {/* Total de comedores y desglose por tipo */}
        <div className={styles.bloque}>
          <h2>Total de Comedores</h2>
          <p>Total: {totalComedores}</p>
          {Object.keys(tiposComedores).map(tipo => (
            <p key={tipo}>{tipo}: {tiposComedores[tipo]}</p>
          ))}
        </div>

        {/* Información sobre tamaños */}
        <div className={styles.bloque}>
          <h2>Tamaños de Marcadores</h2>
          <p>El tamaño de los marcadores se determina por la cantidad de raciones diarias entregadas:</p>
          <ul>
            <li><strong>Pequeño</strong> ( 100 raciones): {tamanosComedores.small} comedores</li>
            <li><strong>Mediano</strong> (= 500 raciones): {tamanosComedores.medium} comedores</li>
            <li><strong>Grande</strong> ( 500 raciones): {tamanosComedores.large} comedores</li>
          </ul>
          <p>Ejemplo de iconos para cada tamaño:</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ padding: '3px', fontSize: '4px', maxWidth: '2vw', background: '#0dceea', borderRadius: '50%' }}></div>
            <div style={{ padding: '8px', fontSize: '18px', maxWidth: '6vw', background: '#ff8ce9', borderRadius: '50%' }}></div>
            <div style={{ padding: '12px', fontSize: '25px', maxWidth: '8vw', background: '#39b00c', borderRadius: '50%' }}></div>
          </div>
        </div>

        {/* Listado de cantidad por barrio */}
        <div className={styles.bloque}>
          <h2>Cantidad de Comedores por Barrio</h2>
          <ul>
            {Object.keys(comedorPorBarrio).map(barrio => (
              <li key={barrio}>{barrio}: {comedorPorBarrio[barrio]}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Informes;
