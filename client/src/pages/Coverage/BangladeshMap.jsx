import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
const position = [23.6850, 90.3563]; // Center of Bangladesh

// Optional custom icon (can skip for default)
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Helper component to move map
function FlyToDistrict({ coords }) {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 14, { duration: 1.5 });
    }
    return null;
}

const BangladeshMap = ({serviceCenters }) => {
    const [searchText, setSearchText] = useState('');
    const [activeCoords, setActiveCoords] = useState(null);
    const [activeDistrict, setActiveDistrict] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const district = serviceCenters.find(d =>
            d.district.toLowerCase().includes(searchText.toLowerCase())
        );
        if (district) {
            setActiveCoords([district.latitude, district.longitude]);
            setActiveDistrict(district.district);
        }
    };
    return (
        <>
             <form onSubmit={handleSearch} className="flex items-center text-sm bg-white h-12 border rounded-full border-gray-500/30 w-full max-w-md">
                <CiSearch className='text-3xl ml-3'/>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="px-2 w-full h-full outline-none text-gray-500 bg-transparent" type="text" placeholder="search here..." />
            <button type="submit" className="bg-[#CAEB66] rounded-e-full h-full px-3 flex items-center justify-center text-black font-medium">
                Search
            </button>
           
        </form>
        <div className='md:my-5 my-3'>
            <h2 className='md:text-2xl text-gray-700 dark:text-white'>We deliver almost all over Bangladesh</h2>
        </div>
        <div className="h-[800px] w-full rounded-lg shadow-lg mt-6">

            {/* map container */}
            <MapContainer center={position} zoom={8} scrollWheelZoom={false} className="h-full w-full z-0">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToDistrict coords={activeCoords} />

                {
                    serviceCenters.map((center, index) => <Marker
                        key={index}
                        position={[center.latitude, center.longitude]}
                        icon={customIcon}>
                        <Popup autoOpen={center.district === activeDistrict}>
                            <strong>{center.district}</strong><br />
                            {center.covered_area.join(', ')}
                        </Popup>
                    </Marker>)
                }
            </MapContainer>
        </div>
        </>
    );
};

export default BangladeshMap;