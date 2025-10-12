import BrandStory from "@/components/site/brand-story";
import FeaturedDrop from "@/components/site/featured-drop";
import Hero from "@/components/site/hero";
import ProductGrid from "@/components/site/product-grid";
import StyledByTribe from "@/components/site/styled-by-tribe";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FeaturedDrop />
      <BrandStory />
      <ProductGrid />
      <StyledByTribe />
    </main>
  );
}
