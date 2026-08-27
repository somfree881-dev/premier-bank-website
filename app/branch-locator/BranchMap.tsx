"use client";

import L, { type Marker as LeafletMarker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { memo, useEffect, useMemo, useRef } from "react";
import "leaflet/dist/leaflet.css";

type Branch = { name: string; city: string; manager: string; phone: string; address: string; coordinates: [number, number] };
type Props = { branches: Branch[]; selectedIndex: number | null; onSelect: (index: number) => void; onClear: () => void };

function markerIcon(active: boolean) {
  return L.divIcon({ className: `premier-marker${active ? " active" : ""}`, html: '<div class="premier-marker-dot"></div>', iconSize: [49, 49], iconAnchor: [24, 49], popupAnchor: [0, -45] });
}
const inactiveMarkerIcon = markerIcon(false);
const activeMarkerIcon = markerIcon(true);

function MapCamera({ branch }: { branch?: Branch }) {
  const map = useMap();
  useEffect(() => {
    if (branch) map.flyTo(branch.coordinates, 14, { animate: true, duration: 0.9 });
    else map.fitBounds([[-1.5, 39.4], [12.7, 50.7]], { animate: true, duration: 0.9, padding: [18, 18] });
  }, [branch, map]);
  return null;
}

function ClearSelection({ onClear }: { onClear: () => void }) {
  useMapEvents({ click: () => onClear() });
  return null;
}

function BranchMarker({ branch, index, active, onSelect }: { branch: Branch; index: number; active: boolean; onSelect: (index: number) => void }) {
  const ref = useRef<LeafletMarker>(null);
  useEffect(() => { if (active) ref.current?.openPopup(); }, [active]);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates[0]},${branch.coordinates[1]}`;
  return <Marker ref={ref} position={branch.coordinates} icon={active ? activeMarkerIcon : inactiveMarkerIcon} bubblingMouseEvents={false} eventHandlers={{ click: () => onSelect(index) }}>
    <Popup autoPan><div className="branch-popup"><strong>{branch.name}</strong><span>{branch.manager}</span><span>{branch.phone}</span><small>{branch.address}</small><a href={directions} target="_blank" rel="noopener noreferrer">Get directions &rarr;</a></div></Popup>
  </Marker>;
}

function BranchMap({ branches, selectedIndex, onSelect, onClear }: Props) {
  const selected = selectedIndex === null ? undefined : branches[selectedIndex];
  const center = useMemo<[number, number]>(() => [5.152, 45.655], []);
  return <MapContainer center={center} zoom={5.5} minZoom={4} maxZoom={18} scrollWheelZoom fadeAnimation={false} markerZoomAnimation={false} className="premier-leaflet-map" aria-label="Premier Bank branch locations map">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" updateWhenZooming={false} keepBuffer={1} />
    <MapCamera branch={selected} />
    <ClearSelection onClear={onClear} />
    {branches.map((branch, index) => <BranchMarker key={branch.name} branch={branch} index={index} active={index === selectedIndex} onSelect={onSelect} />)}
  </MapContainer>;
}

export default memo(BranchMap);
