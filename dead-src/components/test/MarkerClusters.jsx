import React from 'react'
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Marker } from "react-leaflet";

function MarkerClusters() {
    return (
        <>
           {/* Example Markers */}
           <MarkerClusterGroup>
           <Marker position={[-27, 143.0901]} />
           <Marker position={[-27.8397, 143.0297]} />
           <Marker position={[-28.2297, 143.0122]} />
           <Marker position={[-27, 143.0901]} />
           <Marker position={[-27.8397, 144.0297]} />
           <Marker position={[-28.2297, 143.0122]} />
           <Marker position={[-28, 143.0901]} />
           <Marker position={[-27.8397, 143.0297]} />
           <Marker position={[-28.2297, 143.0122]} />
           <Marker position={[-26, 143.0901]} />
           <Marker position={[-27.8397, 143.0297]} />
           <Marker position={[-28.2297, 140.0122]} />
           <Marker position={[-28, 143.0901]} />
           <Marker position={[-27.8397, 142.0297]} />
           <Marker position={[-28.2297, 143.0122]} />
         </MarkerClusterGroup>

         <MarkerClusterGroup>
           <Marker position={[-29.8397, 140.0297]} />
           <Marker position={[-28.2297, 142.0122]} />
           <Marker position={[-29, 141.0901]} />
           <Marker position={[-27.8397, 141.0297]} />
           <Marker position={[-29.2297, 140.0122]} />
           <Marker position={[-26, 141.0901]} />
           <Marker position={[-30.8397, 142.0297]} />
           <Marker position={[-29.2297, 140.0122]} />
           <Marker position={[-28, 141.0901]} />
           <Marker position={[-29.8397, 141.0297]} />
           <Marker position={[-29.2297, 140.0122]} />
           <Marker position={[-28, 141.0901]} />
           <Marker position={[-29.8397, 139.0297]} />
           <Marker position={[-29.2297, 142.0122]} />
           <Marker position={[-27, 141.0901]} />
           <Marker position={[-29.8397, 140.0297]} />
           <Marker position={[-26.2297, 141.0122]} />
           <Marker position={[-25, 141.0901]} />
         </MarkerClusterGroup>

         <MarkerClusterGroup>
           <Marker position={[-20.8397, 140.0297]} />
           <Marker position={[-27.2297, 140.0122]} />
           <Marker position={[-28, 141.0901]} />
           <Marker position={[-26.8397, 140.0297]} />
           <Marker position={[-27.2297, 135.0122]} />
           <Marker position={[-26, 131.0901]} />
           <Marker position={[-20.8397, 140.0297]} />
           <Marker position={[-27.2297, 140.0122]} />
           <Marker position={[-28, 141.0901]} />
           <Marker position={[-26.8397, 140.0297]} />
           <Marker position={[-27.2297, 135.0122]} />
           <Marker position={[-26, 131.0901]} />
           <Marker position={[-20.8397, 140.0297]} />
           <Marker position={[-27.2297, 140.0122]} />
           <Marker position={[-28, 141.0901]} />
           <Marker position={[-26.8397, 140.0297]} />
           <Marker position={[-27.2297, 135.0122]} />
           <Marker position={[-26, 131.0901]} />
           <Marker position={[-20.8397, 140.0297]} />
           <Marker position={[-27.2297, 140.0122]} />
           <Marker position={[-28, 141.0901]} />
           <Marker position={[-26.8397, 140.0297]} />
         </MarkerClusterGroup>
         </>
    )
}

export default MarkerClusters
