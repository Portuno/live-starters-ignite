import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, MapPin, Users, Lightbulb, Coffee, Mic, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Agenda = () => {
  const schedule = [
    {
      time: "18:00",
      title: "Apertura de Puertas y Bienvenida",
      description: "Acreditación, un momento para disfrutar de un café y el primer contacto con otros creadores. Prepárate para una tarde de networking y mucho aprendizaje.",
      icon: Coffee,
    },
    {
      time: "19:00 - 20:00",
      title: "Speakers y Contenido Exclusivo",
      description: "Una hora de contenido intensivo con expertos. Descubre las claves para monetizar tus directos y aprovecha las herramientas de IA para potenciar tu contenido.",
      icon: Mic,
    },
    {
      time: "20:00 - 21:00",
      title: "Networking, Entrevistas y Creación de Contenido",
      description: "El evento no termina con los speakers. Tendrás una hora entera para conectar con marcas, entrevistadores y otros creadores. Un espacio único para hacer contactos, grabar tus primeros videos y llevar tu contenido al siguiente nivel.",
      icon: Video,
    },
    {
      time: "21:00",
      title: "Cierre del evento",
      description: "Es hora de despedirnos. El evento culmina, pero las conexiones y aprendizajes recién comienzan.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            Volver a inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            LIVE STARTERS - Agenda del Evento
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Descubre todo lo que tenemos preparado para ti en nuestra jornada para creadores en vivo.
          </p>
        </div>
      </header>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-creator-purple mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Duración</CardTitle>
                <CardDescription className="text-lg">2 horas de contenido intensivo + tiempo de networking</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-creator-pink mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Ubicación</CardTitle>
                <CardDescription className="text-lg mb-3">Cr8tive Labs</CardDescription>
                <a
                  href="https://www.google.com/maps/place/CR8TIVE+LABS/@39.4613363,-0.378535,15.53z/data=!4m6!3m5!1s0xd604f7997122653:0xaba11b4288585f62!8m2!3d39.4617995!4d-0.3778492!16s%2Fg%2F11x3bmxqw0?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-creator-pink hover:text-creator-purple transition-colors text-sm font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  Calle Denia 73, Bajo, Valencia 46006
                </a>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-creator-orange mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Networking</CardTitle>
                <CardDescription className="text-lg">Conecta con expertos y creadores</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Schedule */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Programa del Día
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Un evento híbrido enfocado en la activación y monetización de creadores en vivo.
            </p>
            
            <div className="space-y-6">
              {schedule.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-primary p-3 rounded-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <span className="text-creator-purple font-semibold text-lg">{item.time}</span>
                          </div>
                          <CardDescription className="text-base leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 h-auto shadow-glow">
                <Link to="/#registration">¡Regístrate ahora!</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;