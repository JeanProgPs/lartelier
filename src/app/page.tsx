// ============================================================
// L'Atelier Rio — Home Page
// ============================================================
import HeroBanner from '@/sections/HeroBanner';
import NewArrivals from '@/sections/NewArrivals';
import Categories from '@/sections/Categories';
import FeaturedCollection from '@/sections/FeaturedCollection';
import BestSellers from '@/sections/BestSellers';
import ShopTheLook from '@/sections/ShopTheLook';
import Testimonials from '@/sections/Testimonials';
import InstagramGrid from '@/sections/InstagramGrid';
import Newsletter from '@/sections/Newsletter';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <NewArrivals />
      <Categories />
      <FeaturedCollection />
      <BestSellers />
      <ShopTheLook />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
    </>
  );
}
