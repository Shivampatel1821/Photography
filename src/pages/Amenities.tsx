
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Waves, Dumbbell, Users, Music, Utensils, Wine, Coffee, Clock, Car, Plane, MapPin, BookOpen } from "lucide-react";

export default function Amenities() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Fallback content in case translation keys are missing
  const content = {
    en: {
      title: "Hotel Amenities",
      subtitle: "Discover all the luxurious amenities and services we offer to make your stay unforgettable.",
      description: "At Hotel Manegment System, we pride ourselves on providing world-class amenities that cater to every aspect of your vacation. From wellness facilities to gourmet dining, we have everything you need for the perfect seaside getaway.",
      wellness: {
        title: "Wellness & Recreation",
        description: "Rejuvenate your body and mind with our premium wellness facilities.",
        items: [
          { title: "Spa & Wellness Center", description: "Full-service spa with massage therapy and beauty treatments" },
          { title: "Fitness Center", description: "State-of-the-art equipment and personal training services" },
          { title: "Swimming Pool", description: "Olympic-sized pool with ocean views" },
          { title: "Yoga Studio", description: "Daily classes and meditation sessions" }
        ]
      },
      dining: {
        title: "Dining & Entertainment",
        description: "Savor exceptional cuisine and enjoy memorable evenings.",
        items: [
          { title: "Fine Dining Restaurant", description: "Gourmet Mediterranean cuisine with fresh local ingredients" },
          { title: "Coffee Bar", description: "Artisan coffee and light snacks throughout the day" },
          { title: "Wine Cellar", description: "Curated selection of local and international wines" },
          { title: "24/7 Room Service", description: "Around-the-clock dining service to your room" }
        ]
      },
      services: {
        title: "Services & Conveniences",
        description: "Professional services to enhance your comfort and convenience.",
        items: [
          { title: "Concierge Service", description: "Personalized assistance for tours and reservations" },
          { title: "Airport Transfer", description: "Complimentary shuttle service to and from the airport" },
          { title: "Car Rental", description: "On-site car rental service for exploring the area" },
          { title: "Tour Planning", description: "Customized local tours and excursion planning" }
        ]
      },
      entertainment: {
        title: "Entertainment & Activities",
        description: "Exciting activities and entertainment for all ages.",
        items: [
          { title: "Beach Activities", description: "Water sports, beach volleyball, and seaside relaxation" },
          { title: "Social Events", description: "Live music, cultural shows, and themed evenings" },
          { title: "Live Music", description: "Regular performances by local and international artists" },
          { title: "Library & Reading", description: "Quiet spaces with books and magazines in multiple languages" }
        ]
      },
      gallery: {
        title: "Amenities Gallery",
        subtitle: "Take a visual tour of our exceptional facilities and services."
      }
    },
    it: {
      title: "Servizi dell'Hotel",
      subtitle: "Scopri tutti i servizi di lusso che offriamo per rendere il tuo soggiorno indimenticabile.",
      description: "Al Hotel Manegment System, ci vantiamo di fornire servizi di classe mondiale che soddisfano ogni aspetto della tua vacanza. Dalle strutture benessere alla ristorazione gourmet, abbiamo tutto ciò di cui hai bisogno per la perfetta fuga al mare.",
      wellness: {
        title: "Benessere e Ricreazione",
        description: "Rigenera il tuo corpo e la tua mente con le nostre strutture benessere premium.",
        items: [
          { title: "Centro Spa e Benessere", description: "Spa completa con massaggi terapeutici e trattamenti di bellezza" },
          { title: "Centro Fitness", description: "Attrezzature all'avanguardia e servizi di personal training" },
          { title: "Piscina", description: "Piscina olimpionica con vista sull'oceano" },
          { title: "Studio Yoga", description: "Lezioni quotidiane e sessioni di meditazione" }
        ]
      },
      dining: {
        title: "Ristorazione e Intrattenimento",
        description: "Assapora una cucina eccezionale e goditi serate memorabili.",
        items: [
          { title: "Ristorante Gourmet", description: "Cucina mediterranea gourmet con ingredienti freschi locali" },
          { title: "Coffee Bar", description: "Caffè artigianale e snack leggeri tutto il giorno" },
          { title: "Cantina Vini", description: "Selezione curata di vini locali e internazionali" },
          { title: "Servizio in Camera 24/7", description: "Servizio ristorazione 24 ore su 24 nella tua camera" }
        ]
      },
      services: {
        title: "Servizi e Comodità",
        description: "Servizi professionali per migliorare il tuo comfort e la tua comodità.",
        items: [
          { title: "Servizio Concierge", description: "Assistenza personalizzata per tour e prenotazioni" },
          { title: "Transfer Aeroporto", description: "Servizio navetta gratuito da e per l'aeroporto" },
          { title: "Noleggio Auto", description: "Servizio noleggio auto in loco per esplorare la zona" },
          { title: "Pianificazione Tour", description: "Tour locali personalizzati e pianificazione escursioni" }
        ]
      },
      entertainment: {
        title: "Intrattenimento e Attività",
        description: "Attività emozionanti e intrattenimento per tutte le età.",
        items: [
          { title: "Attività in Spiaggia", description: "Sport acquatici, beach volley e relax in riva al mare" },
          { title: "Eventi Sociali", description: "Musica dal vivo, spettacoli culturali e serate a tema" },
          { title: "Musica dal Vivo", description: "Esibizioni regolari di artisti locali e internazionali" },
          { title: "Biblioteca e Lettura", description: "Spazi tranquilli con libri e riviste in più lingue" }
        ]
      },
      gallery: {
        title: "Galleria Servizi",
        subtitle: "Fai un tour visivo delle nostre eccezionali strutture e servizi."
      }
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;
  
  // Helper function to get the appropriate icon for each amenity
  const getIcon = (categoryName: string, index: number) => {
    const icons = {
      wellness: [<Waves key={0} />, <Dumbbell key={1} />, <Waves key={2} />, <Music key={3} />],
      dining: [<Utensils key={0} />, <Coffee key={1} />, <Wine key={2} />, <Clock key={3} />],
      services: [<Clock key={0} />, <Plane key={1} />, <Car key={2} />, <MapPin key={3} />],
      entertainment: [<Waves key={0} />, <Users key={1} />, <Music key={2} />, <BookOpen key={3} />]
    };
    
    return icons[categoryName as keyof typeof icons]?.[index] || <Coffee />;
  };
  
  const categories = [
    { key: 'wellness', data: currentContent.wellness },
    { key: 'dining', data: currentContent.dining },
    { key: 'services', data: currentContent.services },
    { key: 'entertainment', data: currentContent.entertainment }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Hotel Manegment System
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {currentContent.title}
              </h1>
              <p className="text-muted-foreground">
                {currentContent.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Description Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                {currentContent.description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Categories Sections */}
        {categories.map((category, categoryIndex) => {
          const isEven = categoryIndex % 2 === 0;
          
          return (
            <section key={category.key} className={`py-16 ${isEven ? 'bg-card' : ''}`}>
              <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {category.data.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.data.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.data.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-6 rounded-xl flex flex-col items-center text-center animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                        {getIcon(category.key, index)}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      
      <Footer />
    </div>
  );
}
