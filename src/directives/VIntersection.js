export default {
    mounted(el, binding) {
            const options = {
                rootMargin: '0px',
                threshold: 1.0
            }
            const callback = (entries, observer) => {

                if (entries[0].isIntersecting){
                    
                    console.log(observer)
                    //В binding мы передаём функцию и сразу её вызываем
                    binding.value()
                }
            };
            const observer = new IntersectionObserver(callback, options);
            observer.observe(el)
    },
    name: 'intersection'
}