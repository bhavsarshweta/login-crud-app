<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img v-bind:src="imgData" alt="{{imgAlt}}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ title }}
            </h2>
            <p>

                {{ content }}

            </p>




            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
</template>
<script >
export default {
    props: ["content", "title", "imgData", "imgAlt"]
}

</script>