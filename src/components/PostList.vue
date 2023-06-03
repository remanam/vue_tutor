<template>
    <!-- <div v-if="posts.length > 0 "> -->
        <div v-if="arePostsExist">
        <h3>Список постов</h3>


        <transition-group name="post-list">
            <post-item         
                v-for="post in posts"
                :key="post.id"
                :post="post"
                @remove="$emit('remove', post)"  
                />     
        </transition-group>
    </div>
    <h2 v-else style="color: red">
            Список постов пуст</h2>
</template>

<script>
import PostItem from './PostItem.vue';
    export default {
    components: { PostItem },
        props: {
            posts: {
                type: Array,
                required: true
            }
        },
    computed: {
        arePostsExist(){
            return this.posts?.length > 0
        }
    }
    }
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move {
    transition: transform 0.5s ease;
}

</style>