import { ref, onMounted } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export function useSwiper() {
  const swiperInstance = ref(null);
  
  const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
    console.log('Swiper instance:', swiper);
  };

  const onSlideChange = () => {
    console.log('Slide changed');
  };

  const swiperModules = [Navigation, Pagination, Scrollbar, A11y];

  return {
    onSwiper,
    onSlideChange,
    swiperModules,
    swiperInstance,
  };
}