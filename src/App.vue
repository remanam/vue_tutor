<template>
    <div class="post" v-for="post in posts" v-bind:key="post.id">
        <div><strong>Название: </strong> {{ post.tittle }} </div>
        <div><strong>Описание: </strong> {{ post.body }} </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {id: 1, tittle: 'Javascript', body: "Описание поста"},
                {id: 2, tittle: 'Javascript 2', body: "Описание поста 2"},
                {id: 3, tittle: 'Javascript 3', body: "Описание поста 3"},
            ]
        }
    },
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}

</style>