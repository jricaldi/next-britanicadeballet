export const dataProfesoras = [
  {
    name: "Margarita",
    extraName: "Untiveros",
    scrollId: 'id-profesoras-margarita',
    description:
      "Desde 1995 es directora de la Academia Británica de Ballet, diplomada como profesora de la Royal Academy of Dance de Inglaterra. Inicia sus estudios de danza clásica a temprana edad en la Asociación Choriartium en Lima con la maestra Lucy Telge y paralelamente lleva cursos de música con Teresa Costa. En Caracas forma parte del grupo de danza de la Academia Interamericana de Ballet con el maestro Mario Ignisci y continúa sus estudios musicales en el conservatorio Juan José Landaeta de Caracas, tomando clases de perfeccionamiento de piano con la destacada pianista norteamericana Harriet Seher. Debido a su trayectoria musical y su afinidad por diversos idiomas ha implementado desde el año 2014 clases individuales de piano, violín y canto así como clases de alemán, ingles e italiano. Esta expansión extra-curricular permite a nuestras alumnas formarse en dichos rubros y tomar clases individuales antes o después de sus clases de ballet en nuestra academia.",
    image: { name: '/profesoras/profesora-margarita.png', width: 690, height: 457 },
    showSchedules: true,
    schedules: [
      {
        name: "Adolescentes & Adultas principiantes",
        time: ["Sábados 11:45am - 1:15pm (90min)"],
      },
    ],
  },
  {
    name: "Milagros",
    extraName: "Nugent",
    scrollId: 'id-profesoras-milagros',
    description:
      "Se dedica a la enseñanza del ballet clásico y tap desde 1991 en nuestra academia. Inició sus estudios de ballet en la Academia de Ballet Miraflores. Culminó sus estudios en la Academia Británica de Ballet bajo la dirección de la Sra. Rosina Müller. Aprende el método de la Royal Academy of Dance de Londres. En el año 1988 se incorpora a la Cía. Danza Viva donde permanece hasta el año 1991. Actualmente es parte del staff de profesores de la Escuela Independiente Danza Viva y dicta clases en diversos nidos y colegios.",
    image: { name: '/profesoras/profesora-milagros.png', width: 690, height: 457 },
    showSchedules: true,
    schedules: [
      {
        name: "3 años",
        time: "Martes y Jueves 3:45pm - 4:30pm",
      },
      {
        name: "5 - 6 años",
        time: "Martes y Jueves 4:30pm - 5:30pm",
      },
      {
        name: "9 - 12 años",
        time: "Martes y Jueves 5:30pm - 6:30pm",
      },
      {
        name: "Intermedias / Avanzadas",
        time: "Martes y Jueves 6:30pm - 7:30pm (Avanzadas hasta 8:00pm)",
      },
    ],
  },
  {
    name: "Diana",
    extraName: "Untiveros",
    scrollId: 'id-profesoras-diana',
    description:
      "Inicia sus estudios de ballet clásico a temprana edad en nuestra Academia con diferentes maestras, entre ellas Rosina Müller. Paralelamente lleva cursos de música. En enero del 2014 culmina sus estudios de Musicología e Italiano en Alemania. Además de enseñar ballet y tap, es profesora particular de piano, canto e idiomas en la Academia Británica de Ballet.",
    image: { name: '/profesoras/profesora-diana.png', width: 690, height: 457 },
    showSchedules: true,
    schedules: [
      {
        name: "4 años",
        time: "Lunes y Miércoles 3:30pm - 4:30pm",
      },
      {
        name: "7 - 8 años",
        time: "Lunes y Miércoles 4:30pm - 5:30pm",
      },
      {
        name: "4 & 5 años",
        time: "Sábados 9:45am - 10:45am",
      },
      {
        name: "6 - 8 años",
        time: "Sábados 10:45am - 11:45am",
      },
      {
        name: "Adolescentes & Adultas principiantes",
        time: "Lunes y Miércoles 6:30pm - 7:30pm",
      },
    ],
  },
];

export const dataClases = [
  {
    name: "Clases en línea",
    description: "",
    noColumnsText: true,
    image: { name: '/clases/curso-online.jpg', width: 690, height: 636},
    showSchedules: true,
    showClase: false,
    scrollId: "id-clases-en-linea",
    hasCustomDetails: true,
    schedules: [
      {
        name: "Solicita más información a nuestro correo:",
        email: "britanicaballet@gmail.com",
        emailLabel: "britanicaballet@gmail.com",
      },
    ],
  },
  {
    name: "Ballet",
    description:
      "Entendemos que al ser parte del desarrollo artístico de nuestras alumnas, estamos formando el crecimiento humano en cada una de ellas. Tenemos el privilegio de cumplir esta labor desde 1956. Seguimos la metodología de ballet clásico de la Royal Academy of Dance de Inglaterra que introdujo a Lima nuestra fundadora la maestra inglesa Rosina Müller. Fuimos los primeros en introducir el Tap en el Perú y es por eso que a partir del grado Pre-primary 2 nuestras alumnas se forman con dos tipos de danza: la hora de clase se divide en 45min de ballet y 15min de Tap. Nuestras alumnas se benefician con descuentos en clases individuales de música. Ofrecemos también de manera online clases de piano, canto, violín y teoría musical.",
    image: { name: '/clases/curso-ballet.png', width: 690, height: 350 },
    showSchedules: true,
    showClase: true,
    scrollId: "id-clases-ballet",
    schedules: [
      {
        name: "Solicita más información a nuestro correo:",
        email: "britanicaballet@gmail.com",
        emailLabel: "britanicaballet@gmail.com",
      },
      {
        name: "Lunes y Miércoles",
        time: [
          "3:30pm - 4:30pm (4 años)",
          "4:30pm - 5:30pm (7 & 8 años)",
          "6:30pm - 7:30pm (Adolescentes y Adultas principiantes)",
        ],
      },
      {
        name: "Martes y Jueves",
        time: [
          "3:45pm - 4:30pm (3 años)",
          "4:30pm - 5:30pm (5 & 6 años)",
          "5:30pm - 6:30pm (9 - 12 años)",
          "6:30pm - 7:30pm (Intermedias y Avanzadas)"
        ],
      },
      {
        name: "Sábados",
        time: [
          "9:45am - 10:45am (4 & 5 años)",
          "10:45am - 11:45am (6 - 8 años)",
          "11:45am - 1:15pm (Adolescentes y Adultas principiantes)",
        ],
      }
    ],
  },
  {
    name: "Música",
    description:
      "Expande tu desarrollo artístico con nuestras clases individuales de música. Ofrecemos también de manera online clases de piano, canto, violín y teoría musical en nuestra academia. Nuestros profesores son musicólogos graduados de la Universidad de Heidelberg - Alemania. Solicita los horarios disponibles escribiéndonos al siguiente correo:",
    image: { name: '/clases/curso-piano.jpg', width: 690, height: 290 },
    showSchedules: true,
    showClase: true,
    scrollId: "id-clases-musica",
    hasEmailLink: true,
    email: "britanicaballet@gmail.com",
    emailLabel: "britanicaballet@gmail.com",
    schedules: [
      {
        name: "Niños desde los 4 años, adolescentes y adultos",
      },
    ],
  },
  {
    name: "Danza",
    extraName: "Contemporánea",
    description:
      "Desarrolla tu creatividad y sensibilidad artística aprendiendo las técnicas básicas de la Danza Contemporánea. Si sientes motivación por expresarte mediante el cuerpo, deseas cargarte de energía, mantenerte en forma e iniciarte dentro de esta bella disciplina, solicita una clase de prueba con nosotros.",
    image: { name: '/clases/curso-danza-contemporanea.jpg', width: 690, height: 423 },
    showSchedules: true,
    showClase: false,
    scrollId: "id-clases-danza",
    schedules: [
      {
        name: "Adolescentes & Adultas principiantes",
        time: "Jueves 6:30pm - 8:00pm",
      },
    ],
  },
  {
    name: "Musicoterapia",
    description: "",
    image: { name: '/clases/curso-musicoterapia.jpg', width: 690, height: 460 },
    showSchedules: false,
    showClase: false,
    schedules: [
      {
        name: "5 años en adelante",
      },
    ],
  },
];
