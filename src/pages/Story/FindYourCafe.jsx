import "./FindYourCafe.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import find_your_cafe from "./FindYourCafeData.js";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FlyToCafe = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([coordinates.lat, coordinates.lng], 15, { duration: 1.2 });
  }, [coordinates, map]);

  return null;
};

const FindYourCafe = () => {
  const navigate = useNavigate();
  const [selectedCafe, setSelectedCafe] = useState(find_your_cafe[0]);
  const [searchCafe, setSearchCafe] = useState("");

  const filteredCafe = find_your_cafe.filter((cafe) =>
    cafe.name.toLocaleLowerCase().includes(searchCafe.toLocaleLowerCase()),
  );

  return (
    <section className="find-your-cafe-container">
      <div className="content">
        <div className="cafes">
          <div className="header">
            <p>find your hearth</p>
            <h1>our locations</h1>
            <div className="search">
              <input
                type="text"
                value={searchCafe}
                onChange={(e) => setSearchCafe(e.target.value)}
                placeholder="Search by neighborhood..."
              />
              <IoIosSearch className="search-icon" />
            </div>
          </div>
          <div className="cafe-list">
            {filteredCafe.map((cafe, index) => (
              <div key={index} className="cafe-item">
                <div className="image">
                  <img src={cafe.image} alt="" />
                </div>
                <h2>{cafe.name}</h2>
                <p>
                  <MdOutlineLocationOn /> {cafe.location}
                </p>
                <p>
                  <TbClockHour4 /> {cafe.hours}
                </p>
                <div className="btns">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCafe(cafe);
                    }}
                  >
                    get directions
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/menu`);
                    }}
                  >
                    view menu <GoArrowRight />
                  </button>
                </div>
                <span>{cafe.tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="maps">
          {selectedCafe?.coordinates ? (
            <MapContainer className="map-container"
              center={[
                selectedCafe.coordinates.lat,
                selectedCafe.coordinates.lng,
              ]}
              zoom={15}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  selectedCafe.coordinates.lat,
                  selectedCafe.coordinates.lng,
                ]}
              >
                <Popup className="popup">
                  <h2>{selectedCafe.name}</h2>
                  <p>{selectedCafe.location}</p>
                </Popup>
              </Marker>
              <FlyToCafe coordinates={selectedCafe.coordinates} />
            </MapContainer>
          ) : (
            <p>Select a cafe to view its location.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindYourCafe;
