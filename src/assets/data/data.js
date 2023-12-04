import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

export const navList = [
  {
    icon: <FiHome />,
    path: "/",
  },
  {
    icon: <FiSearch />,
    path: "/search",
  },
  {
    icon: <FiShoppingCart />,
    path: "/shoppingcart",
  },
];

export const products = [
  {
    id: 1,
    image: "../image/product/product1.jpg",
    title: "Samsung Galaxy A34 5G",
    desc: "El Galaxy A34 cuenta con una pantalla brillante y fluida para que disfrutes de tus juegos o de tus videos favoritos con la mejor experiencia. Te ofrece un modulo de cámara completo con 3 lentes (8MP+48MP+5MP) y la mejor tecnología que te invita a grabar todos los videos, con su estabilización mejorada. Este smartphone es resistente al agua y al polvo para que tengas la tranquilidad de tener un equipo resistente. Galaxy A34 es impresionante en cámara, rendimiento y multimedia. ¡Lleva el tuyo ahora!",
    price: 1899990,
    category: "Celulares",
    qty: 0,
    details: [
      {
        title: "Capacidad de almacenamiento",
        desc: "128 GB",
      },
      {
        title: "Pantalla",
        desc: "6.6 pulgadas con alta resolución",
      },
      {
        title: "Camara Principal",
        desc: "48MP",
      },
      {
        title: "Batería",
        desc: "Expandible hasta 1TB",
      },
      {
        title: "Escaner",
        desc: "Huella en pantalla",
      },
    ],
  },
  {
    id: 2,
    image: "../image/product/product2.jpg",
    title: "Computador Portátil MacBook Air",
    desc: "Un nuevo poder toma vuelo.El MacBook Air es el notebook más delgado y liviano de Apple, y vuelve completamente renovado por dentro. Gracias al chip M1 de Apple, la CPU es hasta 3,5 veces más rápida y la GPU hasta 5 veces más vleoz. El avanzado Neural Engine permite un aprendizaje automático hasta 9 veces superior. La batería es la de mayor duración en un MacBook Air. Y su diseño sin ventilador es supersilencioso. Nunca ha sido tan fácil llevar tanto poder a todos lados. ¡Encuentra el MacBook ideal para ti acá! Compara los modelos Encuentra el MacBook perfecto para ti.",
    price: 6659000,
    category: "Computadores",
    qty: 0,
    details: [
      {
        title: "Marca",
        desc: "Mac",
      },
      {
        title: "RAM",
        desc: "8GB",
      },
      {
        title: "Capacidad de almacenamiento",
        desc: "256 GB ",
      },
      {
        title: "Disco",
        desc: "Disco SSD",
      },
      {
        title: "Pantalla",
        desc: "14' pulgadas",
      },
      {
        title: "Conectividad",
        desc: "Mejor conectividad gracias a su tarjeta inalámbrica Realtek",
      },
    ],
  },
  {
    id: 3,
    image: "../image/product/product3.webp",
    title: "Computador Portátil HP",
    desc: "Con el Portátil HP 14-dq5005la, mantente productivo y entretenido desde cualquier lugar gracias a la batería de larga duración y la pantalla con microbordes. Aprecia más en la pantalla gracias al bisel con microborde de 6,5 mm. Un diseño fino y ligero te permite llevar este portátil a cualquier lugar con facilidad. Supera los días de mayor actividad gracias al desempeño de su procesador eficiente y gran capacidad de almacenamiento. Completa tus tareas con rapidez gracias al alto desempeño, la capacidad de respuesta y la conectividad que te ofrece su excelente configuración. ¡Lleva el tuyo ya!",
    price: 4999000,
    category: "Computadores",
    qty: 0,
    details: [
      {
        title: "Marca",
        desc: "HP",
      },
      {
        title: "RAM",
        desc: "12GB ",
      },
      {
        title: "Capacidad de almacenamiento",
        desc: "512 GB",
      },
      {
        title: "Procesador",
        desc: "INTEL Core i5",
      },
      {
        title: "Teclado",
        desc: "Español Latinoamericano",
      },
      {
        title: "Pantalla",
        desc: "Retina de 13,3' resolución de 2560 x 1600",
      },
      {
        title: "Conectividad",
        desc: "Wi-Fi 6 / Thunderbolt / USB4",
      },
    ],
  },
  {
    id: 4,
    image: "../image/product/product4.webp",
    title: "Samsung Galaxy S21",
    desc: "Celular Samsung Galaxy S21 5G 256GB Phantom White - Refurbi (reacondicionado) Cada dispositivo Refurbi ha pasado por un riguroso proceso de reacondicionamiento, sometido a un examen completo de funcionalidad, cumpliendo con los mismos estándares de un producto nuevo. Tu dispositivo Refurbi es realmente como nuevo.",
    price: 2799900,
    category: "Celulares",
    qty: 0,
    details: [
      {
        title: "Capacidad de almacenamiento",
        desc: "128 GB",
      },
      {
        title: "Pantalla",
        desc: "6.2 pulgadas",
      },
      {
        title: "Camara Principal",
        desc: "11 a 15 MP",
      },
      {
        title: "Camara Frontal",
        desc: "6 a 10 MP",
      },
      {
        title: "Sistema Operativo",
        desc: "Android",
      },
    ],
  },
  {
    id: 5,
    image: "../image/product/product5.webp",
    title: "Honor 90",
    desc: "Celular HONOR 90 con cámara ultra detallista de 200 Megapixeles y cámara selfie de 50 Megapixeles. Pantalla curva AMOLED con atenuación de alta frecuencia para el cuidado de tu vista. Además de ser muy resistente gracias a la alta tecnología del HONOR Shield Glass. Gran memoria RAM de 12GB y almacenamiento de 256GB para guardar y disfrutar todos tus contenidos con gran velocidad.",
    price: 2899900,
    category: "Celulares",
    qty: 0,
    details: [
      {
        title: "Capacidad de almacenamiento",
        desc: "256 GB",
      },
      {
        title: "Pantalla",
        desc: "6.7 pulgadas",
      },
      {
        title: "Camara Principal",
        desc: "200 MP",
      },
      {
        title: "Camara Frontal",
        desc: "50 MP",
      },
      {
        title: "Sistema Operativo",
        desc: "Android",
      },
    ],
  },
  {
    id: 6,
    image: "../image/product/product6.jpg",
    title: "HUAWEI P60 Pro",
    desc: "Descubre la belleza oculta en la oscuridad y cuenta nuevas historias al anochecer, capturando vívidas imágenes nocturnas que hablan por sí solas gracias al P60 pro. Explora los alrededores y descubre qué puedes encontrar, desde las luces de neón cercanas hasta los rascacielos más lejanos, además lleva Watch Fit de obsequio. ¡Que esperas para tener el tuyo!",
    price: 4999900,
    category: "Celulares",
    qty: 0,
    details: [
      {
        title: "Capacidad de almacenamiento",
        desc: "256 GB",
      },
      {
        title: "Pantalla",
        desc: "6.67 pulgadas",
      },
      {
        title: "Camara Principal",
        desc: "48 MP",
      },
      {
        title: "Camara Frontal",
        desc: "13 MP",
      },
      {
        title: "Sistema Operativo",
        desc: "Android",
      },
    ],
  },
  {
    id: 7,
    image: "../image/product/product7.jpg",
    title: "iPhone 15",
    desc: "El iPhone 15 ahora con Isla Dinámica te muestra alertas y Actividades en Vivo. La nueva cámara gran angular de 48 MP captura fotos en superalta resolución. Teleobjetivo de 2x. Un resistente vidrio con infusión de color en un diseño de aluminio. Y un puerto USB‑C para cargarlo fácilmente. ¡Que esperas para tener el tuyo, lo consigues aquí!",
    price: 4599000,
    category: "Celulares",
    qty: 0,
    details: [
      {
        title: "Capacidad de almacenamiento",
        desc: "256 GB",
      },
      {
        title: "Pantalla",
        desc: "6.1 pulgadas",
      },
      {
        title: "Camara Principal",
        desc: "48 Mpx",
      },
      {
        title: "Camara Frontal",
        desc: "12 Mpx",
      },
      {
        title: "Sistema Operativo",
        desc: "iOS",
      },
    ],
  },
  {
    id: 8,
    image: "../image/product/product8.jpg",
    title: "Computador de escritorio LENOVO",
    desc: "El Aio LENOVO Idea Centre AIO 3 fue creado para un rendimiento eficiente y con una ingeniería verdaderamente elegante. el balance justo entre procesador, memoria y gran capacidad de almacenamiento estado solido, para que pueda manejar variedad de tareas. Con su soporte moderno ahorraras espacio en el escritorio, su pantalla casi sin bordes, resolución Full HD y panel antirreflejo se combina para que no pierdas detalle en tus proyectos y disfrutes tus imágenes y videos, No pierdas esta oportunidad, lleva el tuyo.",
    price: 5799000,
    category: "Computadores",
    qty: 0,
    details: [
      {
        title: "Marca",
        desc: "LENOVO",
      },
      {
        title: "RAM",
        desc: "16 GB",
      },
      {
        title: "Capacidad de almacenamiento",
        desc: "512 GB",
      },
      {
        title: "Procesador",
        desc: "AMD Ryzen 7",
      },
      {
        title: "Pantalla",
        desc: "27 pulgadas",
      },
      {
        title: "Conectividad",
        desc: "Wi-Fi 6 / Thunderbolt / USB4",
      },
    ],
  },
];

export const imageSlider = [
  {
    url: "https://img.freepik.com/foto-gratis/vista-frontal-joven-hombre-sosteniendo-venta-rojo-escrito-sobre-fondo-amarillo-rasgado_140725-103867.jpg?w=1060&t=st=1700851508~exp=1700852108~hmac=fe82fcb91d7fe89dc03cddc2a0593886d3b7229653591cff9a793c74483e846a",
  },
  {
    url: "https://img.freepik.com/foto-gratis/mujer-tiro-completo-etiqueta-venta_23-2149220651.jpg?w=1060&t=st=1700851429~exp=1700852029~hmac=01d1e89ec24b646428c7893ab4fbf76b0400252ed4bb1774c8115f7d9f3708de",
  },
  {
    url: "https://img.freepik.com/foto-gratis/grandes-descuentos-venta-productos_23-2150336669.jpg?w=1380&t=st=1700851226~exp=1700851826~hmac=7c3df191ffdd9439578da8c1c681424e4f65bddf350acc71becf35f6300fb7b4",
  },
];
