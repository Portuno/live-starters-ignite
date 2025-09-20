import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Users, 
  Lightbulb, 
  MapPin, 
  Gift, 
  Calendar,
  Sparkles,
  Target,
  Zap,
  ExternalLink
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import RegistrationForm from "@/components/RegistrationForm";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import GoogleMap from "@/components/GoogleMap";

const Index = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      title: "Un emprendedor que quiere usar TikTok LIVE para atraer clientes.",
    },
    {
      icon: Users,
      title: "Un creador novato que busca su primera oportunidad para monetizar y colaborar con marcas.",
    },
    {
      icon: Lightbulb,
      title: "Alguien curioso que quiere entender cómo la inteligencia artificial puede potenciar su contenido en directo.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Countdown */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="container mx-auto px-4 py-8 relative">
          <div className="flex justify-end mb-8">
            <CountdownTimer />
          </div>
          
          <div className="text-center text-white max-w-5xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 mb-8">
              Valencia • 3 de Octubre 2025
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-white">
              LIVE STARTERS
            </h1>
            <p className="text-xl md:text-3xl mb-4 leading-relaxed text-white font-semibold">
              Monetiza, Fórmate y Conecta
            </p>
            <p className="text-lg md:text-xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Evento en Valencia para creadores de contenido que quieren empezar a monetizar 
              en directo y escalar con inteligencia artificial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                className="bg-neon-yellow text-black hover:bg-neon-yellow/90 text-lg px-8 py-6 h-auto font-bold shadow-glow"
              >
                <a href="#registro">¡Regístrate para reservar tu cupo cuanto antes!</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 text-lg px-8 py-6 h-auto font-semibold"
              >
                <Link to="/agenda">Ver Agenda</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* What You'll Get Section */}
      <section className="py-20 bg-gradient-to-br from-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              ¿Qué vas a conseguir?
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
              Despega tu carrera como creador en solo 2 horas.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Aprende a monetizar tus emisiones LIVE, domina las herramientas que te harán crecer 
              y conéctate con marcas y otros creadores. En este evento, te daremos las claves para 
              empezar a generar ingresos con tu contenido, con el respaldo de los expertos de LinkedInfluences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card border-0 bg-gradient-to-br from-card to-earth-emerald/5">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-earth-coral mx-auto mb-6" />
                <CardTitle className="text-xl mb-4 text-earth-emerald">Monetización Inmediata</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Estrategias probadas para empezar a generar ingresos desde tu primer LIVE
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-to-br from-card to-earth-coral/5">
              <CardContent className="p-8 text-center">
                <Sparkles className="w-16 h-16 text-earth-coral mx-auto mb-6" />
                <CardTitle className="text-xl mb-4 text-earth-emerald">Herramientas IA</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Domina las herramientas de inteligencia artificial que potenciarán tu contenido
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-to-br from-card to-earth-emerald/5">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-earth-coral mx-auto mb-6" />
                <CardTitle className="text-xl mb-4 text-earth-emerald">Colaboraciones con Marcas</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Conecta con marcas y aprende a crear partnerships que generen ingresos recurrentes
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-secondary bg-clip-text text-transparent">
              Para ti, si eres...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-earth-emerald">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-6">
                      <div className="bg-earth-emerald p-4 rounded-lg">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-lg leading-relaxed">
                        {feature.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
              Conecta con los expertos y la comunidad
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Contaremos con speakers que son referentes en la creación de contenido en vivo y la monetización. 
              Además, hemos diseñado un espacio de networking para que conozcas a otros creadores, 
              compartas experiencias y crees nuevas sinergias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-earth-coral mx-auto mb-6" />
                <CardTitle className="text-xl mb-4 text-earth-emerald">Speakers Expertos</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Aprende de los mejores en monetización de contenido y estrategias de crecimiento
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <Sparkles className="w-16 h-16 text-earth-coral mx-auto mb-6" />
                <CardTitle className="text-xl mb-4 text-earth-emerald">Networking Exclusivo</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Conecta con otros creadores y crea sinergias que potencien tu carrera
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Surprise Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <Card className="shadow-glow max-w-3xl mx-auto bg-earth-emerald text-white">
            <CardContent className="p-12 text-center">
              <Gift className="w-16 h-16 mx-auto mb-8 text-earth-coral" />
              <CardTitle className="text-3xl mb-8 font-bold">
                Una sorpresa para ti
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed text-white/90">
                Los pre-registrados tendrán acceso a una sorpresa especial que te ayudará 
                a dar el siguiente paso en tu camino como creador. ¡No te quedes sin ella!
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registro" className="py-20 bg-gradient-to-br from-accent to-earth-beige/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {showConfirmation ? (
              <ConfirmationMessage />
            ) : (
              <RegistrationForm onRegistrationSuccess={() => setShowConfirmation(true)} />
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-emerald text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Información del evento */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">LIVE STARTERS</h3>
              <p className="text-white/80 mb-6">Valencia • 3 de Octubre 2025</p>
              <div className="flex justify-center md:justify-start gap-4">
                <Button 
                  asChild
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/agenda">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ver Agenda
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Redes sociales del evento */}
            <div className="text-center md:text-center">
              <h4 className="text-lg font-semibold mb-4 text-earth-coral">Síguenos</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.tiktok.com/@creatorsigcugc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <span className="text-sm">@creatorsigcugc</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a 
                  href="https://www.instagram.com/creatorsigcugc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-sm">@creatorsigcugc</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
            
            {/* Mapa */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-earth-coral">Ubicación</h4>
              <p className="text-white/80 mb-2">Cr8ative Cowork Ruzafa</p>
              <p className="text-white/80 mb-4">Denia 73, Valencia</p>
              <div className="max-w-md mx-auto md:mx-0">
                <GoogleMap height="200px" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;