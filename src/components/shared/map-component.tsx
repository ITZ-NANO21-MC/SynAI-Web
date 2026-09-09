"use client"

import * as React from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export interface MapRef {
  getMap: () => maplibregl.Map | null;
}

interface MapComponentProps {
  apiKey: string;
  mapRef: React.RefObject<MapRef | null>;
}

/**
 * Componente del mapa que encapsula la lógica de MapLibre GL + Geoapify.
 * Se carga de forma diferida (dynamic import) desde la página de contacto
 * para no inflar el bundle inicial.
 */
export default function MapComponent({ apiKey, mapRef }: MapComponentProps) {
  const container = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<maplibregl.Map | null>(null);

  React.useEffect(() => {
    if (map.current || !container.current) return;

    const coords: [number, number] = [-69.69238708900974, 11.404853870141157];

    map.current = new maplibregl.Map({
      container: container.current,
      style: `https://maps.geoapify.com/v1/styles/osm-carto/style.json?apiKey=${apiKey}`,
      center: coords,
      zoom: 15,
      attributionControl: false,
    });

    map.current.addControl(
      new maplibregl.NavigationControl({
        showCompass: true,
        showZoom: true,
      }),
      "top-right"
    );

    new maplibregl.Marker({ color: "#00F2FF" })
      .setLngLat(coords)
      .addTo(map.current);

    if (mapRef) {
      mapRef.current = {
        getMap: () => map.current,
      };
    }

    return () => {
      map.current?.remove();
      map.current = null;
      if (mapRef) {
        mapRef.current = null;
      }
    };
  }, [apiKey, mapRef]);

  return <div ref={container} className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700" />;
}