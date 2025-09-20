import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SocialMediaSelector from "./SocialMediaSelector";

interface SocialProfile {
  platform: string;
  username: string;
}

interface RegistrationFormProps {
  onRegistrationSuccess: () => void;
}

const RegistrationForm = ({ onRegistrationSuccess }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    socialProfiles: [] as SocialProfile[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert registration data into Supabase
      // Convert social profiles to a single string for now (until migration is applied)
      const socialProfileString = formData.socialProfiles.length > 0 
        ? formData.socialProfiles.map(profile => `${profile.platform}: ${profile.username}`).join(', ')
        : null;

      const { error } = await supabase
        .from('registrations')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          social_profile: socialProfileString,
        });

      if (error) {
        console.error('Registration error:', error);
        toast({
          title: "Error en el registro",
          description: "Hubo un problema al procesar tu registro. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Success
      toast({
        title: "¡Registro exitoso!",
        description: "Ya estás en la lista de pre-registrados.",
      });
      setIsSubmitting(false);
      onRegistrationSuccess();
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Error en el registro",
        description: "Hubo un problema al procesar tu registro. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-neon-black rounded-3xl shadow-2xl p-12 border border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¡Reserva tu lugar!
          </h2>
          <p className="text-white/80 text-xl">
            Pre-regístrate y recibe las novedades
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-3">
            <Label htmlFor="fullName" className="text-lg font-semibold text-white block">
              Nombre completo *
            </Label>
            <Input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="h-16 text-xl bg-gray-900 border-2 border-gray-700 text-white placeholder-white/60 focus:border-neon-yellow focus:ring-neon-yellow rounded-xl"
              placeholder="Escribe tu nombre completo aquí"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-lg font-semibold text-white block">
              Correo electrónico *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-16 text-xl bg-gray-900 border-2 border-gray-700 text-white placeholder-white/60 focus:border-neon-yellow focus:ring-neon-yellow rounded-xl"
              placeholder="tu@email.com"
            />
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <Label className="text-lg font-semibold text-white block">
                Redes sociales (opcional)
              </Label>
              <p className="text-white/70 text-sm mt-1">
                Conecta tus perfiles para networking
              </p>
            </div>
            <SocialMediaSelector
              value={formData.socialProfiles}
              onChange={(profiles) => setFormData({ ...formData, socialProfiles: profiles })}
            />
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 bg-neon-yellow hover:bg-neon-yellow/90 text-black font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Registrando..." : "¡Pre-registrarme!"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;