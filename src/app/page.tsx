"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Crown, Globe, Heart, Instagram, Facebook, Twitter, Mail, Package, Sparkles, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Collection", id: "product" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ICONICO"
          button={{
            text: "Shop Now",
            href: "product"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Step Into Style with ICONICO"
          description="Discover premium footwear that combines comfort, style, and quality for every occasion"
          tag="Premium Collection"
          tagIcon={Star}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/7321498/pexels-photo-7321498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium white sneakers"
            },
            {
              imageSrc: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Colorful running shoes"
            },
            {
              imageSrc: "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern casual sneakers"
            },
            {
              imageSrc: "https://images.pexels.com/photos/16304368/pexels-photo-16304368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Designer basketball shoes"
            },
            {
              imageSrc: "https://images.pexels.com/photos/33187079/pexels-photo-33187079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury dress shoes"
            }
          ]}
          buttons={[
            { text: "Shop Collection", href: "product" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded on the belief that great shoes make great journeys, ICONICO has been crafting premium footwear for discerning customers worldwide.",
            "We combine traditional craftsmanship with modern innovation to create shoes that don't just look good – they feel extraordinary."
          ]}
          buttons={[
            { text: "View Collection", href: "product" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Featured Collection"
          description="Discover our handpicked selection of premium footwear"
          tag="New Arrivals"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Urban Elite Basketball",
              price: "$249.99",
              imageSrc: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Urban Elite Basketball shoes",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Marathon Pro Runner",
              price: "$189.99",
              imageSrc: "https://images.pexels.com/photos/4379287/pexels-photo-4379287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marathon Pro Runner shoes",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Classic Canvas Low",
              price: "$79.99",
              imageSrc: "https://images.pexels.com/photos/913514/pexels-photo-913514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic Canvas Low shoes",
              initialQuantity: 1
            }
          ]}
          buttons={[
            { text: "View All Products", href: "https://iconico-store.com" },
            { text: "Size Guide", href: "https://iconico-store.com/size-guide" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Membership Plans"
          description="Join ICONICO Club and enjoy exclusive benefits on all your purchases"
          tag="Exclusive Access"
          tagIcon={Crown}
          plans={[
            {
              id: "basic",
              price: "$29/year",
              name: "Basic Member",
              features: [
                "10% discount on all purchases",
                "Free shipping on orders over $100",
                "Birthday month special offer",
                "Early sale notifications"
              ],
              buttons: [
                { text: "Join Basic", href: "https://iconico-store.com/membership/basic" },
                { text: "Learn More", href: "https://iconico-store.com/membership" }
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/year",
              name: "Premium Member",
              features: [
                "20% discount on all purchases",
                "Free shipping on all orders",
                "Exclusive member-only releases",
                "Priority customer support",
                "Free shoe care kit"
              ],
              buttons: [
                { text: "Join Premium", href: "https://iconico-store.com/membership/premium" },
                { text: "Compare Plans", href: "https://iconico-store.com/membership/compare" }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose ICONICO"
          description="Numbers that showcase our commitment to excellence"
          tag="Trusted by Thousands"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Customers",
              value: "25,000+"
            },
            {
              id: "2",
              icon: Star,
              title: "Average Rating",
              value: "4.9/5"
            },
            {
              id: "3",
              icon: Globe,
              title: "Countries Served",
              value: "45+"
            },
            {
              id: "4",
              icon: Package,
              title: "Orders Delivered",
              value: "100K+"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from shoe lovers worldwide"
          tag="5-Star Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Professional Athlete",
              company: "City Basketball Club",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5264951/pexels-photo-5264951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson portrait"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Fashion Blogger",
              company: "Style & Substance",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6567275/pexels-photo-6567275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Marathon Runner",
              company: "Elite Running Team",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/19231108/pexels-photo-19231108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Rodriguez portrait"
            },
            {
              id: "4",
              name: "Emma Thompson",
              role: "Business Executive",
              company: "Thompson & Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join the ICONICO Family"
          description="Get exclusive access to new releases, special offers, and styling tips delivered to your inbox"
          tagIcon={Mail}
          imageSrc="https://images.pexels.com/photos/9986256/pexels-photo-9986256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern shoe store display"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive marketing emails from ICONICO. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="ICONICO"
          copyrightText="© ICONICO 2025. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Men's Shoes", href: "https://iconico-store.com/men" },
                { label: "Women's Shoes", href: "https://iconico-store.com/women" },
                { label: "New Arrivals", href: "product" },
                { label: "Sale", href: "https://iconico-store.com/sale" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Size Guide", href: "https://iconico-store.com/size-guide" },
                { label: "Returns", href: "https://iconico-store.com/returns" },
                { label: "Shipping", href: "https://iconico-store.com/shipping" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://iconico-store.com/careers" },
                { label: "Press", href: "https://iconico-store.com/press" },
                { label: "Sustainability", href: "https://iconico-store.com/sustainability" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/iconico",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/iconico",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/iconico",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}