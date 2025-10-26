import { CartProvider } from '../context/CartContext'
import '../styles/globals.css'

export const metadata = {
  title: 'SweetMedPharmacy - Your Trusted Online Pharmacy in Nigeria',
  description: 'SweetMedPharmacy offers quality healthcare products delivered to your doorstep. Browse our wide selection of medications, vitamins, and health supplies.',
  keywords: 'pharmacy, healthcare, medications, vitamins, health products, Nigeria, Lagos, online pharmacy',
  authors: [{ name: 'SweetMed Team' }],
  openGraph: {
    title: 'SweetMedPharmacy - Your Trusted Online Pharmacy',
    description: 'Quality healthcare products delivered to your doorstep. Order via WhatsApp.',
    type: 'website',
    siteName: 'SweetMedPharmacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SweetMedPharmacy - Your Trusted Online Pharmacy',
    description: 'Quality healthcare products delivered to your doorstep',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
