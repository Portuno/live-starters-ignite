import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, X } from "lucide-react";

interface SocialProfile {
  platform: string;
  username: string;
}

interface SocialMediaSelectorProps {
  value: SocialProfile[];
  onChange: (profiles: SocialProfile[]) => void;
}

const SOCIAL_PLATFORMS = [
  { value: "tiktok", label: "TikTok", placeholder: "@tuusuario" },
  { value: "instagram", label: "Instagram", placeholder: "@tuusuario" },
  { value: "twitter", label: "Twitter", placeholder: "@tuusuario" },
  { value: "facebook", label: "Facebook", placeholder: "tuusuario" },
  { value: "linkedin", label: "LinkedIn", placeholder: "tuusuario" },
];

const SocialMediaSelector = ({ value, onChange }: SocialMediaSelectorProps) => {
  const [newProfile, setNewProfile] = useState<SocialProfile>({ platform: "", username: "" });

  const handleAddProfile = () => {
    if (newProfile.platform && newProfile.username.trim()) {
      const updatedProfiles = [...value, { ...newProfile }];
      onChange(updatedProfiles);
      setNewProfile({ platform: "", username: "" });
    }
  };

  const handleRemoveProfile = (index: number) => {
    const updatedProfiles = value.filter((_, i) => i !== index);
    onChange(updatedProfiles);
  };

  const handleNewProfileChange = (field: keyof SocialProfile, newValue: string) => {
    setNewProfile(prev => ({ ...prev, [field]: newValue }));
  };

  const getPlaceholder = (platform: string) => {
    const platformData = SOCIAL_PLATFORMS.find(p => p.value === platform);
    return platformData?.placeholder || "@tuusuario";
  };

  return (
    <div className="space-y-6">
      
      {/* Perfiles existentes */}
      {value.map((profile, index) => {
        const platformData = SOCIAL_PLATFORMS.find(p => p.value === profile.platform);
        return (
          <div 
            key={index} 
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700"
          >
            <div className="flex-1">
              <span className="text-base font-semibold text-white">
                {platformData?.label || profile.platform}:
              </span>
              <span className="ml-3 text-base text-neon-cyan">{profile.username}</span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => handleRemoveProfile(index)}
              className="h-10 w-10 p-0 text-gray-400 hover:text-red-400 rounded-lg"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        );
      })}

      {/* Agregar nuevo perfil */}
      <div className="space-y-6 p-6 border-2 border-dashed border-gray-600 rounded-xl bg-gray-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="platform" className="text-base font-semibold text-white block">
              Red social
            </Label>
            <Select
              value={newProfile.platform}
              onValueChange={(value) => handleNewProfileChange("platform", value)}
            >
              <SelectTrigger className="h-14 text-lg bg-gray-900 border-2 border-gray-700 text-white focus:border-neon-yellow focus:ring-neon-yellow rounded-xl">
                <SelectValue placeholder="Selecciona una red social" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                {SOCIAL_PLATFORMS.map((platform) => (
                  <SelectItem key={platform.value} value={platform.value} className="text-white hover:bg-gray-800">
                    {platform.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="username" className="text-base font-semibold text-white block">
              Nombre de usuario
            </Label>
            <Input
              id="username"
              type="text"
              value={newProfile.username}
              onChange={(e) => handleNewProfileChange("username", e.target.value)}
              className="h-14 text-lg bg-gray-900 border-2 border-gray-700 text-white placeholder-white/60 focus:border-neon-yellow focus:ring-neon-yellow rounded-xl"
              placeholder={getPlaceholder(newProfile.platform)}
            />
          </div>
        </div>
        
        <Button
          type="button"
          onClick={handleAddProfile}
          disabled={!newProfile.platform || !newProfile.username.trim()}
          className="w-full h-14 bg-neon-cyan hover:bg-neon-cyan/90 text-black font-semibold text-lg rounded-xl disabled:opacity-50 transition-all duration-300"
        >
          <Plus className="h-5 w-5 mr-3" />
          Agregar perfil
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaSelector;
