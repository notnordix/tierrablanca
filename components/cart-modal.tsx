"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { sendOrderEmail } from "@/lib/actions/order"

export default function CartModal() {
  const { items, totalItems, totalPrice, isCartOpen, closeCart, updateQuantity, removeItem, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const cartItemsRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Set fixed height for cart items container when there are 4+ items
  useEffect(() => {
    if (cartItemsRef.current && items.length >= 4) {
      // Set height to show approximately 3.5 items, encouraging scrolling
      cartItemsRef.current.style.maxHeight = "350px"
    } else if (cartItemsRef.current) {
      cartItemsRef.current.style.maxHeight = "none"
    }
  }, [items.length, isCartOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.fullName.trim()) errors.fullName = "Obligatoire"
    if (!formData.phone.trim()) errors.phone = "Obligatoire"
    if (!formData.city.trim()) errors.city = "Obligatoire"
    if (!formData.address.trim()) errors.address = "Obligatoire"
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email invalide"
    }

    return errors
  }

  const handleCheckout = () => {
    setIsCheckingOut(true)
  }

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Show loading state
    setIsSubmitting(true)

    try {
      // Send order notification email
      const orderData = {
        ...formData,
        items,
        totalPrice,
      }

      const result = await sendOrderEmail(orderData)

      if (result.success) {
        // Clear cart and show success message
        alert("Commande soumise avec succès! Nous vous contacterons bientôt.")
        closeCart()
        setIsCheckingOut(false)
        clearCart() // Add this line to clear the cart after successful order
      } else {
        // Show error message but still proceed with order
        console.error("Failed to send order notification email:", result.message)
        alert("Commande soumise avec succès! Nous vous contacterons bientôt.")
        closeCart()
        setIsCheckingOut(false)
        clearCart() // Add this line to clear the cart after successful order
      }
    } catch (error) {
      console.error("Error processing order:", error)
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToCart = () => {
    setIsCheckingOut(false)
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+212643874852"

    // Create a message with cart details
    let message = `Bonjour TierraBlanca, je souhaite commander les articles suivants:\n\n`

    // Add each item in the cart
    items.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`
      message += `   - Quantité: ${item.quantity}\n`
      if (item.size) message += `   - Taille: ${item.size}\n`
      if (item.color) message += `   - Couleur: ${item.color}\n`
      message += `   - Prix: ${item.price}\n\n`
    })

    // Add total price
    message += `*Total: ${totalPrice.toFixed(2)} MAD*\n\n`
    message += `Je souhaite finaliser ma commande. Merci!`

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isCartOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={closeCart}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden flex flex-col"
          style={{ maxHeight: "calc(100vh - 2rem)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Fixed at top */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
            <h2 className="text-lg font-serif font-semibold text-[#415e5a] flex items-center">
              <ShoppingBag size={18} className="mr-2" />
              {isCheckingOut ? "Informations client" : `Votre Panier (${totalItems})`}
            </h2>
            <button
              onClick={closeCart}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Fermer le panier"
            >
              <X size={18} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="p-8 text-center flex-grow">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Votre panier est vide</h3>
              <p className="text-gray-500 text-sm">Commencez à magasiner pour ajouter des articles à votre panier</p>
            </div>
          ) : isCheckingOut ? (
            <>
              {/* Improved Checkout Form */}
              <div className="p-4 bg-gray-50">
                <form id="checkout-form" className="space-y-3">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Votre nom complet"
                      className={`w-full px-3 py-2 text-sm border ${
                        formErrors.fullName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-[#415e5a] focus:border-[#415e5a]`}
                    />
                    {formErrors.fullName && <p className="mt-1 text-xs text-red-500">{formErrors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        className={`w-full px-3 py-2 text-sm border ${
                          formErrors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-[#415e5a] focus:border-[#415e5a]`}
                      />
                      {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+212 XXXXXXXXX"
                        className={`w-full px-3 py-2 text-sm border ${
                          formErrors.phone ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-[#415e5a] focus:border-[#415e5a]`}
                      />
                      {formErrors.phone && <p className="mt-1 text-xs text-red-500">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      Ville *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Votre ville"
                      className={`w-full px-3 py-2 text-sm border ${
                        formErrors.city ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-[#415e5a] focus:border-[#415e5a]`}
                    />
                    {formErrors.city && <p className="mt-1 text-xs text-red-500">{formErrors.city}</p>}
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse de Livraison *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Votre adresse complète de livraison"
                      className={`w-full px-3 py-2 text-sm border ${
                        formErrors.address ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-[#415e5a] focus:border-[#415e5a]`}
                    />
                    {formErrors.address && <p className="mt-1 text-xs text-red-500">{formErrors.address}</p>}
                  </div>
                </form>
              </div>

              {/* Checkout Footer - Fixed at bottom */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex justify-between font-medium mb-3">
                  <span>Total:</span>
                  <span className="text-lg text-[#415e5a]">{totalPrice.toFixed(2)} MAD</span>
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={handleBackToCart}
                    disabled={isSubmitting}
                    className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitOrder}
                    disabled={isSubmitting}
                    className="flex-1 py-2 bg-[#415e5a] text-white rounded-md hover:bg-[#5a7d79] transition-colors font-medium disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Traitement...
                      </>
                    ) : (
                      "Commander"
                    )}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Cart Items - Scrollable when 4+ items */}
              <div
                ref={cartItemsRef}
                className="overflow-y-auto"
                style={{
                  maxHeight: items.length >= 4 ? "350px" : "none",
                  overflowY: items.length >= 4 ? "auto" : "visible",
                }}
              >
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.size}-${item.color}`} className="p-4 flex">
                      {/* Product Image */}
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="text-sm font-medium truncate max-w-[120px] sm:max-w-[180px]">{item.name}</h3>
                          <p className="ml-2 text-sm font-semibold text-[#415e5a] whitespace-nowrap">{item.price}</p>
                        </div>

                        {/* Display selected options */}
                        <div className="mt-1 mb-2">
                          {(item.size || item.color) && (
                            <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                              {item.size && (
                                <span className="bg-gray-100 px-2 py-0.5 rounded-full">Taille: {item.size}</span>
                              )}
                              {item.color && (
                                <span className="bg-gray-100 px-2 py-0.5 rounded-full">Couleur: {item.color}</span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
                              className="p-1 hover:bg-gray-100"
                              aria-label="Diminuer la quantité"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                              className="p-1 hover:bg-gray-100"
                              aria-label="Augmenter la quantité"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id, item.size, item.color)}
                            className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-full transition-colors"
                            aria-label="Supprimer l'article"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cart Footer - Fixed at bottom */}
              <div className="border-t border-gray-200 p-4 bg-white mt-auto">
                <div className="flex justify-between font-medium mb-3">
                  <span>Total:</span>
                  <span className="text-lg text-[#415e5a]">{totalPrice.toFixed(2)} MAD</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleCheckout}
                    className="flex-1 py-2.5 bg-[#415e5a] text-white rounded-md hover:bg-[#5a7d79] transition-colors font-medium"
                  >
                    Passer la Commande
                  </button>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="py-2.5 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0"
                      className="text-white mr-2"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                        fill="currentColor"
                      />
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
