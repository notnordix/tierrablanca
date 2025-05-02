import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PageHero from "@/components/page-hero"
import ProductGrid from "@/components/product-grid"
import { products } from "@/lib/products"
import EmptyProductState from "@/components/empty-product-state"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f9f7f4]">
      <Header />
      <PageHero
        title="Nos Produits"
        subtitle="Fabriques a la main avec soin et tradition"
        backgroundImage="/hero.jpeg"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#415e5a] mb-3">
              Parcourir Notre Collection
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#415e5a] mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Découvrez nos collections, où chaque pièce reflète l’héritage d’un savoir-faire ancestral et l’âme de la tradition.
            </p>
          </div>

          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <EmptyProductState
              title="Collection Bientôt Disponible"
              message="Nous sommes en train de créer notre nouvelle collection. Veuillez revenir bientôt ou nous contacter pour plus d'informations."
            />
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
