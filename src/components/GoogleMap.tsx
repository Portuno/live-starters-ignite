import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

const GoogleMap = ({ className = "", height = "300px" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Coordenadas de Cr8ative Cowork Ruzafa, Denia 73, Valencia
    const latitude = 39.4658;
    const longitude = -0.3753;
    
    // Crear el iframe de Google Maps
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.123456789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI3JzU2LjkiTiAwwrAyMic1MS4xIlc!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses&q=Denia+73,+Valencia,+Spain"
          width="100%"
          height="${height}"
          style="border:0; border-radius: 8px;"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Cr8ative Cowork Ruzafa en Valencia"
        ></iframe>
      `;
    }
  }, [height]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full ${className}`}
      style={{ height }}
    />
  );
};

export default GoogleMap;
