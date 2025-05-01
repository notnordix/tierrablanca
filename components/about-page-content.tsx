"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPageContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#415e5a] mb-3">Notre Histoire</h2>
          <div className="w-16 sm:w-24 h-1 bg-[#415e5a] mx-auto mb-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Fondee en 2018, TierraBlanca est nee d'une passion pour l'artisanat marocain traditionnel et d'une vision
              d'integrer ces techniques intemporelles dans les maisons contemporaines du monde entier.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Notre parcours a commence lorsque notre fondatrice, Sofia Benali, a decouvert l'argile blanche remarquable
              unique a la region des montagnes de l'Atlas. Inspiree par sa purete et sa polyvalence, elle a reuni une
              equipe d'artisans maitres pour creer des pieces qui honorent la tradition tout en embrassant les principes
              du design moderne.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Le nom "TierraBlanca" - signifiant "terre blanche" - rend hommage a l'argile immaculee qui constitue la
              base de nos creations, symbolisant notre engagement envers les materiaux naturels et les pratiques
              durables.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl order-first md:order-last"
          >
            <Image
              src="/about.jpeg"
              alt="TierraBlanca artisan craftsmanship"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#415e5a] mb-3">
            Notre Philosophie
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#415e5a] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="bg-[#f9f7f4] p-6 rounded-lg">
            <h3 className="text-xl font-serif font-semibold text-[#415e5a] mb-4">Artisanat</h3>
            <p className="text-gray-700">
              Chaque piece est minutieusement fabriquee a la main par des artisans qualifies utilisant des techniques
              transmises de generation en generation, garantissant une qualite et une unicite exceptionnelles dans
              chaque creation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#f9f7f4] p-6 rounded-lg">
            <h3 className="text-xl font-serif font-semibold text-[#415e5a] mb-4">Durabilite</h3>
            <p className="text-gray-700">
              Nous sommes engages dans des pratiques respectueuses de l'environnement, utilisant des materiaux naturels
              et des methodes traditionnelles qui minimisent notre empreinte ecologique tout en soutenant les
              communautes locales.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#f9f7f4] p-6 rounded-lg">
            <h3 className="text-xl font-serif font-semibold text-[#415e5a] mb-4">Design Intemporel</h3>
            <p className="text-gray-700">
              Nos designs melangent l'esthetique marocaine traditionnelle avec le minimalisme contemporain, creant des
              pieces a la fois intemporelles et polyvalentes, ameliorant tout espace de vie.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
