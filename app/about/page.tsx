import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PageHero from "@/components/page-hero"
import AboutPageContent from "@/components/about-page-content"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f9f7f4]">
      <Header />
      <PageHero
        title="A Propos"
        subtitle="Notre histoire, notre passion, notre artisanat"
        backgroundImage="/hero.jpeg"
      />
      <AboutPageContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
