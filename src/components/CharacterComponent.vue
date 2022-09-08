<template>
  <div class="card h-100">
    <img
        class="card-img-top"
        :src="src"
        alt="Card image cap"
    >

    <div class="card-body text-center">

        <h5 class="card-title">
            {{ name }}
        </h5>

        <p class="card-text">
            {{ species }}
            <br>
            {{ origin }}
        </p>

    </div>
</div>
</template>

<script>
    export default {
        props: {
            src: String,
            name: String,
            species: String,
            origin: String,
        }
    }
</script>

<style scoped lang="scss">

    .card{
        border: none;

        .card-img-top {
            border-radius: 100%;
        }
    }

</style>