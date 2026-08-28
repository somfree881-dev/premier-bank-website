"use client";

import L, { type Marker as LeafletMarker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

type Branch = { name: string; city: string; manager: string; phone: string; address: string; coordinates: [number, number] };
type Props = { branches: Branch[]; selectedIndex: number | null; onSelect: (index: number) => void; onClear: () => void };

function markerIcon(active: boolean) {
  const size = active ? 34 : 29;
  return L.divIcon({ className: `premier-marker${active ? " active" : ""}`, html: '<div class="premier-marker-dot"></div>', iconSize: [size, size], iconAnchor: [Math.round(size / 2), size], popupAnchor: [0, -size + 3] });
}
const inactiveMarkerIcon = markerIcon(false);
const activeMarkerIcon = markerIcon(true);

function clusterIcon(count: number) {
  return L.divIcon({ className: "premier-marker-cluster", html: `<span>${count}</span>`, iconSize: [32, 32], iconAnchor: [16, 16] });
}

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

type Cluster = { branches: { branch: Branch; index: number }[]; coordinates: [number, number] };

function ClusteredMarkers({ branches, selectedIndex, onSelect }: Pick<Props, "branches" | "selectedIndex" | "onSelect">) {
  const map = useMap();
  const [mapVersion, setMapVersion] = useState(0);

  useMapEvents({ zoomend: () => setMapVersion((value) => value + 1), moveend: () => setMapVersion((value) => value + 1) });

  const clusters = useMemo<Cluster[]>(() => {
    const zoom = map.getZoom();
    const available = branches.map((branch, index) => ({ branch, index })).filter(({ index }) => index !== selectedIndex);
    if (zoom >= 12) return available.map(({ branch, index }) => ({ branches: [{ branch, index }], coordinates: branch.coordinates }));

    const threshold = zoom <= 7 ? 34 : 28;
    const groups: Cluster[] = [];
    available.forEach((entry) => {
      const point = map.project(entry.branch.coordinates, zoom);
      const matching = groups.find((group) => {
        const groupPoint = map.project(group.coordinates, zoom);
        return point.distanceTo(groupPoint) < threshold;
      });
      if (matching) {
        matching.branches.push(entry);
        const total = matching.branches.length;
        matching.coordinates = [
          matching.branches.reduce((sum, item) => sum + item.branch.coordinates[0], 0) / total,
          matching.branches.reduce((sum, item) => sum + item.branch.coordinates[1], 0) / total,
        ];
      } else {
        groups.push({ branches: [entry], coordinates: entry.branch.coordinates });
      }
    });
    return groups;
  }, [branches, map, mapVersion, selectedIndex]);

  return <>
    {selectedIndex !== null && <BranchMarker branch={branches[selectedIndex]} index={selectedIndex} active onSelect={onSelect} />}
    {clusters.map((cluster) => cluster.branches.length === 1
      ? <BranchMarker key={`${cluster.branches[0].branch.name}-${cluster.branches[0].index}`} branch={cluster.branches[0].branch} index={cluster.branches[0].index} active={false} onSelect={onSelect} />
      : <Marker key={cluster.branches.map(({ index }) => index).join("-")} position={cluster.coordinates} icon={clusterIcon(cluster.branches.length)} eventHandlers={{ click: () => map.flyTo(cluster.coordinates, Math.min(map.getZoom() + 2, 12), { animate: true, duration: 0.55 }) }} />)}
  </>;
}

function BranchMap({ branches, selectedIndex, onSelect, onClear }: Props) {
  const selected = selectedIndex === null ? undefined : branches[selectedIndex];
  const center = useMemo<[number, number]>(() => [5.152, 45.655], []);
  return <MapContainer center={center} zoom={5.5} minZoom={4} maxZoom={18} scrollWheelZoom fadeAnimation={false} markerZoomAnimation={false} className="premier-leaflet-map" aria-label="Premier Bank branch locations map">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" updateWhenZooming={false} keepBuffer={1} />
    <MapCamera branch={selected} />
    <ClearSelection onClear={onClear} />
    <ClusteredMarkers branches={branches} selectedIndex={selectedIndex} onSelect={onSelect} />
  </MapContainer>;
}

export default memo(BranchMap);
