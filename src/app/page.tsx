import Layout from "@/components/Layout";
import Head from "@/components/Head";
import ProductOverview from "@/components/ProductOverview";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <Layout>
        <Head/>
        <ProductOverview/>
        <ProductCarousel/>
    </Layout>
  );
}

