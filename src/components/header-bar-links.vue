<template>
    <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
            <a :href="air"  target="_blank" rel="noopener noreferrer">
                <i class="fas fa-wind" aria-hidden="true"></i>
            </a>
            <a :href="fire"  target="_blank" rel="noopener noreferrer">
                <i class="fas fa-fire" aria-hidden="true"></i>
            </a>
            <a :href="earth"  target="_blank" rel="noopener noreferrer">
               <i class="fa fa-globe" aria-hidden="true"></i>
             </a>
            <a :href="water"  target="_blank" rel="noopener noreferrer">
                <i class="fal fa-water" aria-hidden="true"></i>
            </a>

</template>

<script>
export default {
    data() {
        return {
            air: 'https://www.astrology.com/astrology-101/elements/air',
            fire: 'https://www.astrology.com/astrology-101/elements/fire',
            earth: 'https://www.astrology.com/astrology-101/elements/earth',
            water: 'https://www.astrology.com/astrology-101/elements/water',
        };
    },
};
</script>