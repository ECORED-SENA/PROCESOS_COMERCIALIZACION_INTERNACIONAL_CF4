<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg1
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p La exigencia de los mercados y su crecimiento, hace que las empresas se preocupen por definir los gustos de los consumidores; de esta forma es posible concentrar esfuerzos hacia la especificación y concreción del producto requerido, ampliando su posibilidad de venta y, junto a ella, la reducción de costos en el mercadeo y comercialización. 
    p Para alcanzar este propósito, la investigación de mercados cobra gran relevancia, al aportar los necesarios elementos de orientación, requeridos para la decisión de estrategias de mercadeo que aseguren mayores ganancias.
    p.mb-5 Desde esta perspectiva, la relación entre consumidor y empresa tiene gran importancia, al vincular los procesos de producción, de distribución y de venta, de acuerdo con los resultados obtenidos en la investigación de mercados. Las herramientas empleadas se fundamentan en la observación directa, las encuestas, los censos, el muestreo, la experimentación y la auditoría de tiendas, entre otras; entregando la información necesaria para la interpretación de datos sobre las reales necesidades del consumidor.
    figure
      img(src='@/assets/curso/if1.svg' alt='mapa conceptual')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
