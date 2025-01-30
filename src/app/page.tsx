import Layout from "@/components/Layout";
import Head from "@/components/Head";
import ProductOverview from "@/components/ProductOverview";
import ProductCarousel from "@/components/ProductCarousel";
import Banner from "@/components/Banner";
import CategoryCarousel from "@/components/CategoryCarousel";
import BannerAds from "@/components/BannerAds";

export default function Home() {
  return (
    <Layout>
        <Head/>
        <BannerAds/>
        <ProductOverview/>
        <ProductCarousel/>
        <CategoryCarousel/>
        <Banner/>
    </Layout>
  );
}

