import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

const GoogleMap = ({ className = "", height = "300px" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Crear el iframe de Google Maps con el enlace exacto de CR8TIVE LABS
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9906040000003!2d-0.3762889846249999!3d39.4699079794879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f7997122653%3A0xaba11b4288585f62!2sCR8TIVE%20LABS!5e0!3m2!1ses!2ses!4v1678912345678!5m2!1ses!2ses"
          width="100%"
          height="${height}"
          style="border:0; border-radius: 8px;"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de CR8TIVE LABS en Valencia"
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
