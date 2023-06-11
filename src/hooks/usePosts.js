import {onMounted, ref} from 'vue';
import axios from 'axios';

export default function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(true)
    const fetching = async () => {

        try {
            isPostsLoading.value = true

            const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _page: 1,
                    _limit: limit,
    
                }
            })
            totalPages.value = 10//Math.ceil(response.headers['x-total-count'] / this.limit) // Округляет в большую сторону
            posts.value = response.data    
    
        } catch(e){
            alert("Ошибка получения списка постов")
            console.log(e)
        }  finally {
            isPostsLoading.value = false;
        }
    }

    onMounted(fetching)
    return {
        posts, isPostsLoading, totalPages
    }
}