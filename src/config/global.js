export default {
  global: {
    componenteFormativo:
      'Investigación de la oferta exportable y procesamiento de la información',
    descripcionCurso:
      'Actualmente, las empresas buscan, de una u otra forma, fidelizar sus clientes identificando sus gustos y preferencias para así aumentar las ventas de productos o servicios. Y es por esto que utilizan la investigación de mercados, donde se identifican, obtienen, registran, analizan, presentan y distribuyen datos e información sistemática, acerca de una situación específica que enfrenta la empresa en el mercado, con el propósito de mejorar la toma de decisiones para la solución de problemas y la identificación de oportunidades en este escenario de intercambio comercial.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es la investigación de mercados?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de investigación de mercados',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Etapas y procesos de la investigación de mercados',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Métodos e instrumentos de recolección de datos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Investigación de mercados internacionales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Base de datos y aplicaciones tecnológicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Base de datos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aplicaciones tecnológicas',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Capacho, P. J. R., & Nieto, B. W. (2017). <em>Diseño de base de datos</em>. Barranquilla: Universidad del Norte Editorial, ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Centenera, J. (2015). <em>Comercio Exterior Investigación de Mercados</em> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=z4kV0TMBjCA&t=92s',
    },
    {
      referencia:
        'Dos Santos. (2017). <em>Investigación de mercados: manual universitario</em>. Ediciones Diaz de Santos, S.A. ',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=5190269&query=INVESTIGACION+DE+MERCADOS',
    },
    {
      referencia:
        'Fernández. (2009). <em>Libro segmentación de mercados</em>. McGraw – Hill. ',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=4183555&query=segmentacion',
    },
    {
      referencia:
        'Fernández, T. A. (2004). <em>Claves para la implantación del cuadro de mando integral</em>. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Flores, M. J. C. (2004). <em>El sistema de información para marketing, clave de negocio</em>. Ediciones Deustos – Planeta Agostini, ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co ',
    },
    {
      referencia:
        'Kother, P., & Armstrong, G. (2001). <em>Marketing</em>. New Yersey: McGraw - Hill.',
    },
    {
      referencia:
        'Ortiz, et al. (2014) <em>Marketing: conceptos y aplicaciones</em>. Ediciones de la U, ',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=4183555&query=segmentacion',
    },
    {
      referencia:
        'Plazas. (2011). <em>Investigación de mercados: un enfoque gerencial</em>. Ediciones de la U. ',
      link:
        'https://ebookcentral-proquestcom.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=3199058&query=INVESTIGACION+DE+MERCADOS',
    },
    {
      referencia:
        'Prieto. (2009). <em>Investigación de mercados</em>. ECOE Ediciones, ',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=3198871&query=INVESTIGACION+DE+MERCADOS',
    },
    {
      referencia:
        'Prieto. (2a. Ed.). (2013). <em>Investigación de mercados</em>. ECOE Ediciones, ',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=4870549&query=INVESTIGACION+DE+MERCADOS',
    },
    {
      referencia:
        'Ramakrishnan, R., & Gehrke, J. (3a. ed.). (2007). <em>Sistemas de gestión de bases de datos</em>. McGraw-Hill, ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Red bus. (2016). <em>Red de búsqueda de información internacional</em> [Video]. Youtube. ',
      link: 'https://www.youtube.com/watch?v=BZ9Nm9qXMXE',
    },
    {
      referencia:
        'Salgueiro, A. (2001). <em>Indicadores de gestión y cuadro de mando</em>. Ediciones Diaz de Santos, ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Sepúlveda, G. H. (2009). <em>CRM: Customer relationship management</em>. El Cid Editor, ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'SENA. (2020). <em>Instructivo uso del estilo APA 7 EDICION</em>. ',
      link: 'https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf',
    },
    {
      referencia:
        'Velasco, S. J. (2013). <em>Gestión de la logística en la empresa: Planificación de la cadena de suministros</em>. ',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'Es el conjunto de datos informativos organizados en un mismo contexto para su uso y vinculación; su estructura está compuestas por tablas.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'Grupo de intermediarios relacionados entre sí, que hacen llegar productos y servicios de los fabricantes a los consumidores y usuarios.',
    },
    {
      termino: 'Comerciante exportador',
      significado:
        'Comerciante que opera en el país del fabricante y compra bienes para exportarlos.',
    },
    {
      termino: 'Competencia',
      significado:
        'Conjunto de organizaciones que comercializan un mismo producto y compiten entre sí por el liderazgo de la categoría.',
    },
    {
      termino: 'Competidores',
      significado:
        'Aquellas empresas que ofrecen el mismo tipo de producto o servicio y compiten por el liderazgo de esa categoría.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad para satisfacer en un mayor grado las necesidades o deseos del mercado que sus competidores.',
    },
    {
      termino: 'Consumo',
      significado: 'Acción de compra repetitiva en el tiempo.',
    },
    {
      termino: 'Datos primarios',
      significado:
        'Datos nuevos reunidos específicamente para el proyecto a mano.',
    },
    {
      termino: 'Datos secundarios',
      significado: 'Datos disponibles, ya reunidos para algún otro propósito.',
    },
    {
      termino: 'Empaque',
      significado:
        'Contenedor o envoltura que sirve para proteger al producto en su distribución.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Método de obtención de datos primarios que se aplica entrevistando a una persona, por teléfono, por correo o por internet.',
    },
    {
      termino: 'Estilos de vida',
      significado:
        'Hábitos que se relacionan con las actividades, intereses y opiniones de una persona.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan de acción amplio por el cual una organización trata de alcanzar sus objetivos.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Parte del producto que contiene la información clave acerca de este y del vendedor.',
    },
    {
      termino: 'Fenómeno mercadeo',
      significado:
        'Es un acontecimiento determinado que se comparte y se difunde de forma natural. El excesivo o repentino interés por parte de la audiencia en un suceso o evento concreto, hace que se propague.',
    },
    {
      termino: 'Gestión',
      significado:
        'Actividad dirigida al mejoramiento de los procesos de una organización, con el objetivo de mejorar su productividad y administración.',
    },
    {
      termino: 'Intermediarios',
      significado:
        'Personas naturales o jurídicas que facilitan al consumidor el conocimiento y la obtención del producto.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Proceso social y gerencial por el que los individuos y grupos obtienen lo que necesitan y desean, creando e intercambiando productos y valor con otros (Kotler, 2001).',
    },
    {
      termino: 'Mercado meta',
      significado:
        'Es aquel resultado de la segmentación de mercados, para enfocar los recursos operativos, humanos y financieros de la organización.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'Método usado para identificar patrones y relaciones significativas en masas de datos que serían ignorados o no reconocibles para los investigadores.',
    },
    {
      termino: 'Ofimática',
      significado:
        'Conjunto de programas informáticos que se aplican a las actividades de las oficinas.',
    },
    {
      termino: 'Plan de mercadeo',
      significado:
        'Resumen ejecutivo donde se analizan las situaciones y capacidades internas y externas de la organización y, de acuerdo con esto y al pronóstico del comportamiento de las mismas, se trazan objetivos comerciales para el corto, mediano y largo plazo.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'Proceso administrativo de conjugar los recursos de una empresa con las oportunidades del mercado en el largo plazo.',
    },
    {
      termino: 'Precio',
      significado:
        'Cantidad de dinero que un comprador, cliente o consumidor está dispuesto a pagar por el producto.',
    },
    {
      termino: 'Producto ',
      significado:
        'Cualquier cosa que se ofrece al mercado y satisface una necesidad o un deseo.',
    },
    {
      termino: 'Promoción',
      significado:
        'Comunicación persuasiva hacia públicos objetivos que brinda beneficios tangibles al producto o servicio.',
    },
    {
      termino: 'Proveedor',
      significado:
        'Persona que provee a las empresas bienes y servicios para que esta pueda ofrecer los suyos en el mercado.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'La división de un mercado total de un bien o un servicio en varios grupos menores y homogéneos.',
    },
    {
      termino: 'Segmentación demográfica',
      significado:
        'Subdivisión de mercados basados en factores de población como tamaño, edad y crecimiento.',
    },
    {
      termino: 'Segmentación geográfica',
      significado:
        'Subdivisión de mercados basados en factores como la ubicación de la población.',
    },
    {
      termino: 'Segmentación psicográfica',
      significado:
        'Subdivisión de mercados basados en factores como la dimensión de la personalidad, características de estilo de vida y valores.',
    },
    {
      termino: 'Servicio',
      significado:
        'Actividad identificable e intangible que es el principal objeto de una transacción destinada a proveer satisfacción de necesidades o deseos.    ',
    },
  ],
  complementario: [
    {
      texto:
        'Red bus. (2016). <em>Red de búsqueda de información internacional</em>.',
      tipo: 'Video	',
      link: 'https://www.youtube.com/watch?v=BZ9Nm9qXMXE',
    },
    {
      texto:
        'Jesús Centenera, (2015). <em>Comercio Exterior. Investigación de Mercados</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=z4kV0TMBjCA&t=92s',
    },
    {
      texto:
        'SENA. (2020). <em>Instructivo uso del estilo APA</em>, 7ª edición.',
      tipo: 'Instructivo',
      link: 'http://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Gregorio Ramírez',
        cargo: 'Experto técnico',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Kateryn Valderrama ',
        cargo: 'Experta técnica',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Bertha Paola Bejarano Avila',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdron ',
        cargo: 'Evaluadora instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Adriana Lozano Zapata ',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
      {
        nombre: 'Rafael Augusto Mantilla Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
