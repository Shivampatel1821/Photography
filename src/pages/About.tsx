
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Users, Award, Clock } from "lucide-react";

export default function About() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback content for the about page
  const content = {
    en: {
      title: "About Hotel Manegment System",
      subtitle: "Your perfect seaside escape",
      description: "Discover the story behind our luxury beachfront apartments and what makes Hotel Manegment System the ideal destination for your coastal getaway.",
      story: {
        title: "Our Story",
        text: "Founded with a vision to provide unparalleled seaside hospitality, Hotel Manegment System has been welcoming guests to our beautiful coastal location for years. We combine luxury accommodations with authentic local charm to create unforgettable experiences."
      },
      values: [
        {
          icon: <Award className="h-8 w-8 text-primary" />,
          title: "Excellence",
          description: "We strive for excellence in every aspect of our service, from our luxurious accommodations to our personalized guest experiences."
        },
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: "Hospitality",
          description: "Our warm hospitality and attention to detail ensure that every guest feels welcomed and valued during their stay."
        },
        {
          icon: <MapPin className="h-8 w-8 text-primary" />,
          title: "Location",
          description: "Perfectly positioned on the beautiful coastline, we offer stunning sea views and easy access to local attractions."
        },
        {
          icon: <Clock className="h-8 w-8 text-primary" />,
          title: "Tradition",
          description: "We honor local traditions while providing modern comforts, creating a unique blend of authentic culture and luxury."
        }
      ]
    },
    it: {
      title: "Chi Siamo - Hotel Manegment System",
      subtitle: "La tua fuga perfetta al mare",
      description: "Scopri la storia dietro i nostri appartamenti di lusso fronte mare e cosa rende Hotel Manegment System la destinazione ideale per la tua vacanza costiera.",
      story: {
        title: "La Nostra Storia",
        text: "Fondato con la visione di fornire un'ospitalità costiera senza pari, Hotel Manegment System accoglie ospiti nella nostra bellissima location costiera da anni. Combiniamo sistemazioni di lusso con autentico fascino locale per creare esperienze indimenticabili."
      },
      values: [
        {
          icon: <Award className="h-8 w-8 text-primary" />,
          title: "Eccellenza",
          description: "Aspiriamo all'eccellenza in ogni aspetto del nostro servizio, dalle nostre sistemazioni di lusso alle esperienze personalizzate per gli ospiti."
        },
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: "Ospitalità",
          description: "La nostra calorosa ospitalità e attenzione ai dettagli assicurano che ogni ospite si senta benvenuto e apprezzato durante il soggiorno."
        },
        {
          icon: <MapPin className="h-8 w-8 text-primary" />,
          title: "Posizione",
          description: "Perfettamente posizionati sulla bellissima costa, offriamo viste mozzafiato sul mare e facile accesso alle attrazioni locali."
        },
        {
          icon: <Clock className="h-8 w-8 text-primary" />,
          title: "Tradizione",
          description: "Onoriamo le tradizioni locali fornendo comfort moderni, creando un mix unico di cultura autentica e lusso."
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {currentContent.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {currentContent.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {currentContent.description}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{currentContent.story.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {currentContent.story.text}
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://www.viceroyhotelsandresorts.com/sites/default/files/styles/large_card/public/2025-04/VHR-Viceroy-SugarBeach-Rooms-SuperiorLuxuryVilla-5e3c83807eadd.jpg?h=3c7d5180&itok=0fZWcvQ_"
                  alt="Hotel Manegment System building" 
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-background">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
