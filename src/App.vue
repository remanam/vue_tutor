<template>
    <div class="app">
        <PostForm/>
        <PostList/>       
    </div>

</template>



<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

export default {
    components: {
    PostForm,
    PostList
},
    data() {
        return {
            posts: [
                {id: 1, tittle: 'Javascript', body: "Описание поста"},
                {id: 2, tittle: 'Javascript 2', body: "Описание поста 2"},
                {id: 3, tittle: 'Javascript 3', body: "Описание поста 3"},
            ],
            title: '',
            body: '',

        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost)
            this.title = '';
            this.body = '';
        },
    },
}

</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

</style>