<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Base de datos y aplicaciones tecnológicas
    .contenedor.bg10.mb-5
      .row.align-items-center
        .col-lg-5.ms-auto
          p Los sistemas de información permiten conocer la importancia que tiene la información en toda la organización, ya que estos son el eje principal para la toma de decisiones. Se conocerán los fundamentos de cómo reunir, clasificar, analizar, evaluar y distribuir la información, con el fin de lograr un posicionamiento de un producto o servicio dentro del entorno.
          h3 Base de datos
          p Una base de datos es el conjunto de datos informativos, organizados en un mismo contexto para su uso y vinculación. Se le llama base de datos a los bancos de información que contienen datos relativos a diversas temáticas y categorizados de distinta manera, pero que comparten entre sí algún tipo de vínculo o relación que busca ordenarlos y clasificarlos en conjunto. Sistema de Información es el término general utilizado para la estructura global que incluye todos los mecanismos para compartir datos que se han instalado.
          p Funcionamiento de una base de datos
        .col-lg-6
          figure.boxShadow.border1234.p-4
            img(src='@/assets/curso/t2/f1.svg' alt='Esquema de base de datos')
    .col-lg-10.mx-auto.mb-5
      h3 ¿Qué es un sistema de gestión de base de datos?
      p.mb-5 La administración de las bases de datos se realiza con un Sistema de Gestión de Base de Datos (<em><b>DataBase Management System</b></em>), el cual es un tipo de <em><b>software</b></em> muy específico, dedicado a servir de interfaz entre la base de datos, el usuario y las aplicaciones que la utilizan. Sus principales características son:
      .row.align-items-center
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='Permite el fácil acceso a los datos').mb-4
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f3.svg' alt='Acceso a los datos por múltiples usuarios').mb-4
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f4.svg' alt='Dispone de herramientas para la gestión de los datos y análisis').mb-4
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f5.svg' alt='Permite la organización estructurada de los datos').mb-4
    h3.text-center Componente de una tabla
    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f6.svg' alt='Personas trabajando en una tabla').mb-4
      .col-lg-6
        hr
        .row
          .col-lg-1.texto-blanco
            .circle.fcac
              h2 1
          .col-lg-10
            p 
              b Tablas: 
              | son espacios de almacenamiento que permiten guardar la información que estará compuesta por datos y registros. En una Base de Datos pueden existir muchas tablas, dependiendo de la cantidad de información que se necesita administrar.
        hr
        .row
          .col-lg-1.texto-blanco
            .circle.fcac
              h2 2
          .col-lg-10
            p 
              b Campo: 
              | identifica lo que se utiliza dentro de una tabla, por ejemplo, la tabla de datos personales contendría los campos: número de identificación, apellidos, nombres, dirección, teléfono, sexo, fecha de nacimiento. En los campos se debe establecer una llave primaria o campo que permita clasificar y que sea único; para nuestro ejemplo, el campo que no se repite sería el de número de identificación.
        hr
        .row
          .col-lg-1.texto-blanco
            .circle.fcac
              h2 3
          .col-lg-10
            p 
              b Registro: 
              | los registros son el conjunto de datos que se han ingresado dentro de la tabla, que a su vez será la información para procesar.
    .col-lg-10.mx-auto.mb-5
      h3.text-center Herramientas para procesamiento de información
      p Es una herramienta que permite la gestión, organización y análisis de información, mediante la construcción de una base de datos. Estas herramientas están provistas de una serie de funciones, comandos, y complementos para la administración de la información.
    h3.text-center Clasificación:
    .contenedor.bg9.p-0
      .row.align-items-center.mb-5
        .col-lg-3.me-0.fcs.texto-blanco.p-4.flechaDer
          p 
            b Corporativos: 
            | son aplicaciones que están orientadas a la administración de un gran volumen de información, se interconectan por medio de redes de datos; dentro de este grupo se encuentra Microsoft Access, este software permite la administración de datos en forma de tablas, crear relaciones entre tablas, consultas, formularios y reportes para la presentación de la información.
        .col-lg-3.me-0
          figure.p-3
            img(src='@/assets/curso/t2/f7.svg' alt='persona viendo un servidor')
        .col-lg-3.me-0.fcs.texto-blanco.p-4.flechaDer
          p 
            b Personales: 
            | ofrecen soluciones básicas para la administración y almacenamiento de la información, ya que el volumen de información que procesa es pequeño. Dentro de este grupo encontramos a Microsoft Excel, que es un software basado en hojas de cálculo, que permite realizar cálculos matemáticos, financieros, contables y estadísticos.
        .col-lg-3.me-0
          figure.p-5
            img(src='@/assets/curso/t2/f8.svg' alt='persona y un folder cerrado con candado')
    Separador
    #t_2_1.titulo-segundo
      h2 Aplicaciones tecnológicas
    .col-lg-10.mx-auto.mb-5
      .bloque-texto-a.color-primario.fcb.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/t2/f9.svg' alt='Imagen relacionada')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La tecnología y su innovación, que cada día avanza con más rapidez, condicionando el funcionamiento y el buen manejo operacional de las empresas. 
                p.mb-0 La incorporación de nuevos sistemas de información genera ahorro, rapidez y aumento de la rentabilidad de cada uno de los departamentos que hacen parte de la compañía. Es por esto de suma importancia conocer de cada uno de ellos.
    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f10.svg' alt='tiro al blanco')
      .col-lg-7
        h4 Tipos
        .cajon-b.color-acento-contenido.p-4
          p <em>CRM (Customer Relationship Management)</em>
          p.mb-0 CRM (<em><b>Customer Relationship Management</b></em>), en su traducción literal, se entiende como la Gestión sobre la Relación con los Consumidores, pero es tan genérico como toda frase en inglés traducida al español.
        .cajon-c.color-primario.p-4
          p Para su mejor comprensión, básicamente se refiere a una estrategia de negocios centrada en el cliente. Según Alfredo de Goyeneche, en su publicación registrada en la revista Economía y Administración de la Universidad de Chile, se refiere a que en "CRM estamos frente a un modelo de negocios cuya estrategia está destinada a lograr identificar y administrar las relaciones en aquellas cuentas más valiosas para una empresa, trabajando diferentemente en cada una de ellas, de forma tal que podamos mejorar la efectividad sobre los clientes".
          p.mb-0 En resumen, ser más efectivos al momento de interactuar con los clientes (Sepúlveda, 2009, p.4).
    hr
    .row.mb-4
      .col-lg-1
      .col-lg-7
        h4 Uso
        .cajon-b.color-acento-contenido.p-4
          p El uso está relacionado con la estrategia que la empresa aplica para satisfacer al cliente.  Para esta, utiliza un software de gestión de las relaciones basado en mejora del servicio de atención al cliente, donde incluye a todo su equipo de trabajo.
          p.mb-0 CMI (Cuadro de Mando Integral)
        .cajon-c.color-primario.p-4
          p Es un método de seguimiento de objetivos donde se reúne y se organiza la información con unos indicadores de gestión que miden y hacen el seguimiento del negocio de manera visual y rápida e identifica tendencias, se anticipa a posibles problemas u oportunidades de negocio y los resultados de los diferentes departamentos.
          p Kaplan y Norton, citados por Salgueiro (2001), también expresan que “el cuadro de mando integral (CMI) es mucho más que un conjunto de indicadores que pueden informar de la marcha de la compañía, y que debe utilizarse como un sistema tanto de gestión central como de comunicación y formación.” (p. 53).
          p.mb-0 El CMI es un sistema de gestión organizado coherentemente bajo cuatro perspectivas diferentes:
      .col-lg-3
        figure
          img(src='@/assets/curso/t2/f11.svg' alt='Mejores resultados económicos > Clientes más satisfechos > Mejora de procesos > Mejora en la actuación de los empleados')
          span.text-small Fuente: Salgueiro, 2001, p.54.
      .col-lg-1
    hr
    .row.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f12.svg' alt='RFID')
      .col-lg-7
        p Velasco (2013), clasifica el uso de las etiquetas de la siguiente manera:
        p El uso del cuadro de mando integral está pensado para alinear los objetivos del plan estratégico con la parte operativa. Es la forma más eficiente de ordenar y recoger información de la empresa y, junto con él, recoger los indicadores más representativos de cada área o departamento.
        p RFDI (<em>Radio Frequency Identification</em>)
        p Es un tipo de tecnología que facilita la identificación y almacenamiento de datos de forma inalámbrica, lo cual facilita el trabajo en el equipo de distribución o el departamento asignado.
        .cajon.color-primario.p-4
          p.mb-0 "Las etiquetas RFID son unos dispositivos pequeños, similares a una pegatina, que pueden ser adheridas o incorporadas a un producto, un animal o una persona. Contienen antenas para permitirles recibir y responder a peticiones por radiofrecuencia desde un emisor-receptor RFID" (Velasco, 2013, p. 171).
    hr
    .contenedor.bg6.mb-5
      h3 Ejemplos:
      .col-lg-10.mx-auto.mb-5
        .row
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f13.svg' alt='Etiqueta RFID').mb-4
              span.text-small Etiqueta RFID en uso por Wal-Mart.
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f14.png' alt='Chip RFID').mb-4
              span.text-small Chip RFID &lt;pasivo&gt; encapsulado para uso en uniformes y sector textil. Especial resistencia para lavanderías.
    p El uso de esta tecnología permite tener localizado cualquier producto dentro de la cadena de suministro. En lo referente a la trazabilidad, las etiquetas podrían tener gran aplicación, ya que pueden grabarse, con lo que se podría conocer como: el tiempo que el producto estuvo almacenado y en qué sitios, entre otros, optimizando así el manejo de los productos en las cadenas de suministro. (Velasco, 2013, p. 175).
    p ECR: Respuesta Eficiente al Consumidor.
    p Es un conjunto de estrategias en las que clientes y proveedores trabajan conjuntamente para aportar valor añadido a los consumidores, pero a la vez, reduciendo los costes de gestión de pedidos y almacenaje.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
