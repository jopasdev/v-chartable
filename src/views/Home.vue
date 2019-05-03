<template>
  <div class="home">
    <PlotGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlotGrid from "@/components/PlotGrid/PlotGrid.vue";

export default {
  name: "home",
  components: {
    PlotGrid
  }
};
</script>
