import ContactForm from "@/components/contact-us/contact-form";
import ContactHero from "@/components/contact-us/contact-hero";
import ContactInfo from "@/components/contact-us/contact-info";
import LocationMap from "@/components/contact-us/location-map";
import SocialLinks from "@/components/contact-us/social-links";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <ContactHero />
      <SocialLinks />
      <ContactForm />
      <ContactInfo />
      <LocationMap />
    </div>
  );
}
