import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ConfirmationMessage = () => {
  return (
    <Card className="shadow-2xl border border-neon-cyan/30 bg-neon-black text-white rounded-3xl">
      <CardHeader className="text-center p-8">
        <CardTitle className="text-4xl font-bold text-neon-yellow mb-4">
          ¡Gracias por pre-registrarte!
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-8 p-8">
        <p className="text-xl leading-relaxed text-white">
          Ya estás en la lista. Como siguiente paso, te invitamos a unirte a nuestra 
          comunidad exclusiva en WhatsApp para no perderte ninguna novedad, resolver 
          tus dudas y conectar con otros asistentes.
        </p>
        
        <Button
          asChild
          className="text-xl px-10 py-8 h-auto bg-neon-yellow hover:bg-neon-yellow/90 text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a
            href="https://chat.whatsapp.com/C1bXCfvIIjF3XFei30lB8Y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            ¡Únete al Grupo de WhatsApp!
            <ExternalLink size={24} />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConfirmationMessage;