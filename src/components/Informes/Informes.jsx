import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot, PiBowlSteam } from "react-icons/pi";
import { MdOutlineChurch } from "react-icons/md";
import MiniMap from './MiniMap';
import { Link } from 'react-router-dom';
import styles from './Informes.module.css';
import Entrevistas from './Entrevistas'

ChartJS.register(ArcElement, Tooltip, Legend);

function Informes() {
  const [chartData] = useState({
    labels: ['Comedores', 'Merenderos', 'Ollas Populares', 'Parroquias'],
    datasets: [
      {
        data: [82, 63, 39, 47],
        backgroundColor: ['#0dceea', '#ff8ce9', '#afeb00', '#a930ea'],
        hoverOffset: 8,
      },
    ],
  });

  const options = {
    cutout: '60%', // Crea el vacío en el centro
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Ocultar leyenda para usar etiquetas personalizadas
      },
    },
  };

  // Iconos y colores para la lista de distribución
  const distributionDetails = [
    {
      label: 'Comedores',
      value: 82,
      color: '#0dceea',
      icon: <GiKnifeFork style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
    {
      label: 'Merenderos',
      value: 63,
      color: '#ff8ce9',
      icon: <PiBowlSteam style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
    {
      label: 'Ollas Populares',
      value: 39,
      color: '#afeb00',
      icon: <PiCookingPot style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
    {
      label: 'Parroquias',
      value: 47,
      color: '#a930ea',
      icon: <MdOutlineChurch style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
  ];

  return (
    <section>
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Datos e Informes</h1>
        <Link
          to="https://cf0bb006-eb84-4fd8-8257-c83a9ed00351.filesusr.com/ugd/bd63ad_5e46e30e021f44f1a3f4b1ed4a15d8ce.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadLink}
        >
          DESCARGAR INFORME
        </Link>
      </div>

      {/* Columna 1 */}
      <div className={styles.column}>
        <div className={styles.largeBox}>
          <h1 className={styles.bigNumber}>230</h1>
          <p className={styles.description}>comedores, merenderos y ollas populares</p>
        </div>
        <div className={styles.infoBox}>
          <p><span style={{ fontSize: '3rem' }}>+15%</span> abrió en pandemia (2020-2021)</p>
          <p><span style={{ fontSize: '3rem' }}>127.846</span> raciones semanales</p>
          <p><span style={{ fontSize: '3rem' }}>820</span> raciones semanales por espacio</p>
          <p>(Contabilizando solo los 156 espacios que brindaron esta información)</p>
          <p><span style={{ fontSize: '2rem' }}><strong>Existe en promedio un 15% de demanda no resuelta</strong></span> (lista de espera)</p>
        </div>
      </div>

      {/* Columna 2 */}
      <div className={styles.column}>
        <div className={styles.chartBox}>
          <h2>Distribución</h2>
          <div className={styles.chart}>
            <Doughnut data={chartData} options={options} />
          </div>
          <ul className={styles.labels}>
            {distributionDetails.map((item, index) => (
              <li
                key={index}
                className={styles.labelItem}
                style={{
                  background: item.color,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem',
                  borderRadius: '5px',
                  marginBottom: '0.5rem',
                }}
              >
                <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>
                {item.value} {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Columna 3 */}
      <div className={styles.column}>
        <div className={styles.dataBox}>
          <MiniMap />
          <p><strong>El <span style={{ fontSize: '3rem' }}>53%</span></strong> están en barrios populares</p>
          <p><strong>El <span style={{ fontSize: '3rem' }}>71%</span></strong> se encuentran en las comunas 1, 4, 7 y 8</p>
        </div>
      </div>

    </div>
                <Entrevistas />

    </section>
  );
}

export default Informes;
