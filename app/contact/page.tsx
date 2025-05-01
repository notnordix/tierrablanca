import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import WhatsAppButton from "@/components/whatsapp-button"
import PageHero from "@/components/page-hero"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f9f7f4]">
      <Header />
      <PageHero
        title="Contactez-Nous"
        subtitle="Nous serions ravis de vous entendre"
        backgroundImage="/hero.jpeg"
      />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
