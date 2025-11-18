import { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot, PiBowlSteam } from "react-icons/pi";
import { MdOutlineChurch } from "react-icons/md";
import MiniMap from './MiniMap';
import { Link } from 'react-router-dom';
import styles from './Informes.module.css';
import Entrevistas from './Entrevistas';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function Informes() {
  // === NUEVOS DATOS 2025 ===
  const [barData] = useState({
    labels: ['2024', '2025'],
    datasets: [
      {
        label: 'Raciones servidas',
        data: [127846, 198161],
        backgroundColor: ['#0dceea', '#002d42'],
        borderRadius: 8,
      },
    ],
  });

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // === NUEVO GRÁFICO COMPARATIVO DE TIPOS DE ESPACIO ===
  const [tipoEspaciosData] = useState({
    labels: ['Olla popular', 'Merendero', 'Olla y merendero', 'Comedor'],
    datasets: [
      {
        label: '2024',
        data: [9, 23, 15, 53],
        backgroundColor: '#0dceea',
      },
      {
        label: '2025',
        data: [9, 17, 15, 59],
        backgroundColor: '#002d42',
      },
    ],
  });

  const tipoEspaciosOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  // === DATOS 2024 (SE MANTIENEN) ===
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

  // === Tortas para Informe 2025 ===
const [chartData2025] = useState({
  labels: ['Comedores', 'Merenderos', 'Ollas Populares', 'Parroquias'],
  datasets: [
    {
      data: [59, 17, 9, 15], // datos 2025
      backgroundColor: ['#a930ea', '#ff8ce9', '#afeb00', '#0dceea'], // violetas y coloridos
      hoverOffset: 8,
    },
  ],
});

  const options = {
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  const distributionDetails = [
    {
      label: 'Comedores',
      value: 44,
      color: '#0dceea',
      icon: <GiKnifeFork style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
    {
      label: 'Merenderos',
      value: 20,
      color: '#ff8ce9',
      icon: <PiBowlSteam style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
    {
      label: 'Ollas Populares',
      value: 24,
      color: '#afeb00',
      icon: <PiCookingPot style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
    {
      label: 'Parroquias',
      value: 12,
      color: '#a930ea',
      icon: <MdOutlineChurch style={{ color: 'white', fontSize: '1.2rem' }} />,
    },
  ];

  return (
    <section>
      {/* ======= INFORME 2025 ======= */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Informe 2025</h1>
          <Link
            to="https://b8fb8220-56a0-4c66-8c04-1f822c5cf036.filesusr.com/ugd/0f4ca0_3d7c01f3953848e9b5c68cf329ae4c1a.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadLink}
          >
            DESCARGAR INFORME COMPLETO
          </Link>
        </div>

        
        {/* Columna 1 */}
        <div className={styles.column}>
          <div className={styles.infoBox}>
                        <h1 className={styles.bigNumber}>+24,5%</h1>
            <p>de raciones servidas respecto al año anterior</p>
            <p><span style={{ fontSize: '2rem' }}><strong>Incremento de raciones 2024–2025</strong></span> </p>
               <p><span style={{ fontSize: '3rem' }}>70%</span> niños, niñas y adolescentes</p>
            <p><span style={{ fontSize: '3rem' }}>17%</span> adultos mayores</p>
            <p><span style={{ fontSize: '3rem' }}></span> relevamiento específico realizado en 25 comedores y merenderos, sobre el total de raciones repartidas.</p>
          <div style={{ padding: '1rem 0' }}>
        </div>

          </div>

          
        </div>

   {/* Columna 2 - Torta Informe 2025 */}
<div className={styles.column}>
  <div className={styles.chartBox}>
    <h2>Distribución 2025</h2>
    <div className={styles.chart}>
      <Doughnut data={chartData2025} options={options} />
    </div>
    <ul className={styles.labels}>
      <li className={styles.labelItem} style={{ background: '#a930ea' }}>Comedor: 44%</li>
      <li className={styles.labelItem} style={{ background: '#ff8ce9' }}>Merendero: 20%</li>
      <li className={styles.labelItem} style={{ background: '#afeb00' }}>Olla popular: 24%</li>
      <li className={styles.labelItem} style={{ background: '#0dceea' }}>Olla y merendero: 12%</li>
    </ul>
  </div>
</div>

 {/* Columna 3 */}
        <div className={styles.column}>
          <div className={styles.largeBox}>
            

    {/* Placa 4: composición de tipos de espacios */}
          <div style={{ height: '200px' }}>
            <Bar data={tipoEspaciosData} options={tipoEspaciosOptions} />
          </div>
          <p>Distribución porcentual según tipo de espacio (comparativo interanual)</p>
            <h1 className={styles.bigNumber}>4%</h1>
            <p className={styles.description}>de los espacios pasaron de merenderos a comedores en el último año.</p>
          </div>
      
        </div>
        

     
      </div>

      
      {/* ======= ENTREVISTAS ======= */}
      <Entrevistas />

      {/* ======= INFORME 2024 ======= */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Informe 2024</h1>
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
            <p><span style={{ fontSize: '3rem' }}>+15%</span> abrió en pandemia (2020–2021)</p>
            <p><span style={{ fontSize: '3rem' }}>127.846</span> raciones semanales</p>
            <p><span style={{ fontSize: '3rem' }}>820</span> raciones semanales por espacio</p>
            <p>(Contabilizando solo los 156 espacios que brindaron esta información)</p>
            <p><span style={{ fontSize: '2rem' }}><strong>Existe en promedio un 15% de demanda no resuelta</strong></span> (lista de espera).</p>
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

    </section>
  );
}

export default Informes;
