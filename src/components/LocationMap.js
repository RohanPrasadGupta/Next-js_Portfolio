import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DEFAULT_ZOOM = 6;

export default function LocationMap({ location }) {
  const { name, description, coordinates, zoom = DEFAULT_ZOOM } = location;

  const customIcon = useMemo(
    () =>
      L.icon({
        iconUrl: "/images/location-pin.svg",
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -36],
      }),
    []
  );

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
      iconUrl: markerIcon.src ?? markerIcon,
      shadowUrl: markerShadow.src ?? markerShadow,
    });
  }, []);

  return (
    <div className="w-full mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-light">Current Location</h2>
        <p className="text-sm text-light/80">{description}</p>
      </div>

      <div className="mt-4 h-80 w-full overflow-hidden rounded-2xl border-2 border-light/40 shadow-xl">
        <MapContainer
          center={coordinates}
          zoom={zoom}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates} icon={customIcon}>
            <Popup>
              <div className="text-sm">
                <strong>{name}</strong>
                <div>{description}</div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
