"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Crown, Gift, GlassWater, HelpCircle, Instagram, Mail, Phone, Quote, Store, Users, Wine } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="grid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212585774-n2ic6m4n.jpg"
          logoAlt="The Library Wine Boutique"
          brandName="The Library"
          button={{
            text: "Reservas",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="The Library"
          description="Homenaje al vino y a aquellos que lo saben disfrutar. Un triple concepto que combina Boutique, Bar Gastronómico, y Club Privado."
          buttons={[
            {
              text: "Descubra Más",
              href: "about"
            },
            {
              text: "Reservas",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212586839-yy5npkto.jpg"
          imageAlt="The Library Wine Boutique Madrid interior"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Nuestro Concepto"
          description="NO TODAS LAS HISTORIAS SE CUENTAN CON PALABRAS. The Library significa biblioteca, pero también puede traducirse como 'bodega de vinos privada'. Un nombre cuidadosamente seleccionado tanto por su significado como por el concepto arquitectónico y creativo del espacio."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Triple Concepto Exclusivo"
          description="Una experiencia única que combina tres espacios en uno"
          tag="Experiencias"
          tagIcon={Wine}
          textboxLayout="default"
          animationType="entrance-slide"
          features={[
            {
              title: "The Boutique",
              description: "Inspirados en las grandes bibliotecas palaciegas, albergamos unas 3.500 referencias de vinos desde grandes bodegas españolas, francesas e italianas hasta selecciones del Nuevo Mundo.",
              icon: Store,
              button: {
                text: "Explorar",
                href: "#boutique"
              }
            },
            {
              title: "The Bar",
              description: "Nuestra carta cuenta con cerca de 80 propuestas de tintos, blancos, rosados, espumosos, generosos y vinos dulces. El mejor producto para el mejor vino.",
              icon: GlassWater,
              button: {
                text: "Ver Carta",
                href: "#bar"
              }
            },
            {
              title: "Club Privado",
              description: "Un espacio exclusivo donde la monumentalidad del mobiliario aporta grandeza sin ostentación. Madera de roble dialoga con pavimentos de mármol.",
              icon: Crown,
              button: {
                text: "Membresía",
                href: "#club"
              }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Experiencias Exclusivas"
          description="Descubra nuestras propuestas gastronómicas y enológicas únicas"
          tag="Ofertas Especiales"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "gift-card",
              name: "Tarjeta Regalo",
              price: "Desde 50€",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212587358-k1ty66k0.jpg",
              imageAlt: "Tarjeta regalo The Library"
            },
            {
              id: "new-year",
              name: "Nochevieja Especial",
              price: "Consultar",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212588070-uk7qcfnn.jpg",
              imageAlt: "Celebración Nochevieja"
            },
            {
              id: "wine-tasting",
              name: "Cata Privada",
              price: "Desde 75€",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212588951-k93fxn0w.jpg",
              imageAlt: "Cata de vinos privada"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Membresías Exclusivas"
          description="Únase a nuestro club privado y disfrute de privilegios únicos"
          tag="Club Privado"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "classic",
              badge: "Clásica",
              badgeIcon: Wine,
              price: "150€/mes",
              subtitle: "Para amantes del vino",
              features: [
                "Acceso completo al club privado",
                "10% descuento en boutique",
                "Invitación a catas mensuales",
                "Reservas prioritarias"
              ]
            },
            {
              id: "premium",
              badge: "Premium",
              badgeIcon: Crown,
              price: "300€/mes",
              subtitle: "La experiencia completa",
              features: [
                "Todos los beneficios clásicos",
                "20% descuento en boutique",
                "Cenas privadas exclusivas",
                "Servicio de sommelier personal",
                "Acceso a reservas limitadas"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Nuestro Equipo"
          description="Profesionales apasionados por el vino y la gastronomía"
          tag="Expertos"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          members={[
            {
              id: "sommelier",
              name: "Chef Sommelier",
              role: "Director de Vinos",
              description: "Experto en vinos con más de 20 años de experiencia en las mejores bodegas europeas. Especializado en maridajes únicos.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212589631-aak4ab49.jpg",
              imageAlt: "Chef Sommelier",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/thelibrarywineboutique"
                }
              ]
            },
            {
              id: "chef",
              name: "Chef Ejecutivo",
              role: "Dirección Gastronómica",
              description: "Creador de experiencias gastronómicas únicas que complementan perfectamente nuestra selección de vinos.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212590294-fjkp316o.jpg",
              imageAlt: "Chef Ejecutivo",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/thelibrarywineboutique"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Lo Que Dicen Nuestros Clientes"
          description="Experiencias únicas de quienes han vivido The Library"
          tag="Testimonios"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              id: "1",
              name: "Carlos Mendoza",
              role: "Empresario",
              company: "Madrid Capital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212589631-aak4ab49.jpg",
              imageAlt: "Carlos Mendoza"
            },
            {
              id: "2",
              name: "Isabel Fernández",
              role: "Crítica Gastronómica",
              company: "Revista Gourmet",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212590294-fjkp316o.jpg",
              imageAlt: "Isabel Fernández"
            },
            {
              id: "3",
              name: "Antonio Ruiz",
              role: "Coleccionista",
              company: "Vinos Selectos",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212590988-f7mu0bz7.jpg",
              imageAlt: "Antonio Ruiz"
            },
            {
              id: "4",
              name: "María González",
              role: "Sommelier",
              company: "Restaurante Michelin",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212591599-iwusjhlj.jpg",
              imageAlt: "María González"
            },
            {
              id: "5",
              name: "Eduardo Silva",
              role: "Chef",
              company: "Haute Cuisine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212592364-623jszoo.jpg",
              imageAlt: "Eduardo Silva"
            },
            {
              id: "6",
              name: "Carmen López",
              role: "Enóloga",
              company: "Bodegas Premium",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212592865-ovckspr7.jpg",
              imageAlt: "Carmen López"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Preguntas Frecuentes"
          description="Todo lo que necesita saber sobre The Library Wine Boutique"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "¿Necesito reserva para visitar The Library?",
              content: "Para The Boutique no es necesaria reserva durante el horario de apertura. Para The Bar y experiencias gastronómicas, recomendamos reservar con antelación."
            },
            {
              id: "2",
              title: "¿Cuáles son los horarios de apertura?",
              content: "<strong>THE BOUTIQUE:</strong> Lunes - Domingo 10:00 - 20:30<br><strong>THE BAR:</strong> Domingo - Jueves 13:00 - 2:00, Viernes - Sábado 13:00 - 2:30"
            },
            {
              id: "3",
              title: "¿Ofrecen catas de vino?",
              content: "Sí, organizamos catas privadas y eventos especiales. Nuestros expertos sommeliers guían experiencias personalizadas según sus preferencias."
            },
            {
              id: "4",
              title: "¿Hay dress code?",
              content: "The Library mantiene una política de admisión que refleja nuestro ambiente elegante y sofisticado. Recomendamos vestimenta elegante casual."
            },
            {
              id: "5",
              title: "¿Puedo comprar vinos para llevar?",
              content: "Por supuesto. Nuestra boutique cuenta con más de 3.500 referencias disponibles para compra, desde grandes bodegas hasta selecciones exclusivas del Nuevo Mundo."
            },
            {
              id: "6",
              title: "¿Cómo puedo hacerme miembro del club privado?",
              content: "Puede solicitar información sobre membresías contactándonos directamente. Ofrecemos diferentes niveles de membresía con beneficios exclusivos."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Suscríbete"
          tagIcon={Mail}
          title="Donde el vino y la gastronomía cuentan historias únicas"
          description="Suscríbete para ser parte de nuestros encuentros especiales, descubrir sabores nuevos y explorar experiencias que despiertan los sentidos."
          inputPlaceholder="Su correo electrónico"
          buttonText="Suscribirse"
          termsText="Al suscribirse acepta recibir comunicaciones de The Library Wine Boutique."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763212585774-n2ic6m4n.jpg"
          logoText="The Library"
          copyrightText="© 2025 The Library Wine Boutique. Todos los derechos reservados."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/thelibrarywineboutique",
              ariaLabel: "Síguenos en Instagram"
            },
            {
              icon: Phone,
              href: "tel:+34913304262",
              ariaLabel: "Llámanos"
            },
            {
              icon: Mail,
              href: "mailto:thelibrary@grupoparaguas.com",
              ariaLabel: "Envíanos un email"
            }
          ]}
          columns={[
            {
              title: "Contacto",
              items: [
                {
                  label: "C/ Serrano, 22",
                  href: "#"
                },
                {
                  label: "28001, Madrid",
                  href: "#"
                },
                {
                  label: "(+34) 913 304 262",
                  href: "tel:+34913304262"
                },
                {
                  label: "Call Center: (+34) 670 71 26 56",
                  href: "tel:+34670712656"
                }
              ]
            },
            {
              title: "Experiencias",
              items: [
                {
                  label: "The Boutique",
                  href: "#boutique"
                },
                {
                  label: "The Bar",
                  href: "#bar"
                },
                {
                  label: "Club Privado",
                  href: "#club"
                },
                {
                  label: "Tarjeta Regalo",
                  href: "#gift"
                }
              ]
            },
            {
              title: "Información",
              items: [
                {
                  label: "Horarios",
                  href: "#hours"
                },
                {
                  label: "Reservas",
                  href: "#reservations"
                },
                {
                  label: "Política de Admisión",
                  href: "#policy"
                },
                {
                  label: "Newsletter",
                  href: "#newsletter"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}