
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Maximize, MapPin, Bath, Coffee, Wifi, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


// Same apartments data as in Apartments.tsx
const allApartments = [
  {
    id: "1",
    name: "Deluxe Sea View Suite",
    description: "Luxurious suite with panoramic sea views, modern amenities, and a private balcony.",
    price: 180,
    capacity: 2,
    size: 45,
    image: "https://image-tc.galaxy.tf/wijpeg-757x6k2tiakdi2d9d57ky4w1o/030-titanic-luxury-collection-bodrum-superior-room_wide.jpg?crop=0,100,1920,1080=",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Balcony"]
  },
  {
    id: "2",
    name: "Premium Family Apartment",
    description: "Spacious apartment ideal for families, with full kitchen and stunning coastal views.",
    price: 250,
    capacity: 4,
    size: 75,
    image: "https://cdn.home-designing.com/wp-content/uploads/2018/10/luxury-neoclassical-bedroom.jpg",
    location: "Second row",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Washing Machine"]
  },
  {
    id: "3",
    name: "Executive Beach Studio",
    description: "Elegant studio with direct beach access, modern design, and premium finishes.",
    price: 150,
    capacity: 2,
    size: 35,
    image: "https://www.studiominteriordesign.net/wp-content/uploads/2023/12/studio-m-seacrest-destin-fl-interior-design-40-1024x683.jpg",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchenette", "Bathroom", "Air Conditioning", "TV"]
  },
  {
    id: "4",
    name: "Luxury Penthouse Suite",
    description: "Exclusive top-floor suite with expansive terrace and panoramic sea views.",
    price: 350,
    capacity: 4,
    size: 90,
    image: "https://media.istockphoto.com/id/2021707621/photo/night-scene-modern-style-luxury-black-master-bedroom-with-city-view-3d-render.jpg?s=612x612&w=0&k=20&c=D4_n5-lvzP9HiC-MXI8f5qYM9R7CH6EbF2Xyq9V8b_o=",
    location: "Beachfront",
    features: ["Wi-Fi", "Full Kitchen", "2 Bathrooms", "Air Conditioning", "TV", "Terrace", "Jacuzzi"]
  },
  {
    id: "5",
    name: "Classic Double Room",
    description: "Comfortable hotel room with modern amenities and partial sea views.",
    price: 120,
    capacity: 2,
    size: 28,
    image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?semt=ais_hybrid&w=740",
    location: "Hotel building",
    features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Mini Fridge"]
  },
  {
    id: "6",
    name: "Garden View Apartment",
    description: "Peaceful apartment surrounded by lush gardens, just a short walk from the beach.",
    price: 160,
    capacity: 3,
    size: 55,
    image: "https://media.istockphoto.com/id/1066863894/photo/minimal-sofa-located-at-the-window-with-garden-view-3d-render.jpg?s=612x612&w=0&k=20&c=KzlT5nhfcrQXjzTloMXmLCaifTAZv2gAE9izoCkr5C4=",
    location: "Garden area",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Terrace"]
  },
];

export default function ApartmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const apartment = allApartments.find(apt => apt.id === id);
  
  if (!apartment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Apartment Not Found</h1>
            <Button onClick={() => navigate('/apartments')}>Back to Apartments</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Use translated name and description if available
  const translatedName = language !== 'en' && t.apartmentDescriptions?.[apartment.id]?.name 
    ? t.apartmentDescriptions[apartment.id].name 
    : apartment.name;
    
  const translatedDescription = language !== 'en' && t.apartmentDescriptions?.[apartment.id]?.description 
    ? t.apartmentDescriptions[apartment.id].description 
    : apartment.description;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container py-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/apartments')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Apartments
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-96 lg:h-full rounded-xl overflow-hidden">
              <img 
                src={apartment.image} 
                alt={translatedName}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{translatedName}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{apartment.location}</span>
                </div>
                <p className="text-lg text-muted-foreground">{translatedDescription}</p>
              </div>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-muted px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{apartment.capacity} guests</span>
                </div>
                <div className="flex items-center bg-muted px-4 py-2 rounded-lg">
                  <Maximize className="h-5 w-5 mr-2" />
                  <span>{apartment.size} m²</span>
                </div>
              </div>
              
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Features & Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {apartment.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        {feature === "Bathroom" && <Bath className="h-4 w-4 mr-2" />}
                        {feature === "Kitchen" && <Coffee className="h-4 w-4 mr-2" />}
                        {feature === "Wi-Fi" && <Wifi className="h-4 w-4 mr-2" />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Pricing */}
              <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold">${apartment.price}</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
                  <Button 
                    size="lg" 
                    className="btn-primary"
                    onClick={() => navigate('/booking')} // 👉 આ લાઈનમાં બધું છ
                    >
                  Book Now
                  </Button>
                  </div>
              </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
