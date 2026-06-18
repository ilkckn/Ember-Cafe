import "./VisitUs.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { IoLocationOutline } from "react-icons/io5";
import { TbClockHour4 } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { MdOutlineDirections } from "react-icons/md";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const VisitUs = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) {
      return undefined;
    }

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
    }).setView([47.649, 7.578], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([47.649, 7.578]).addTo(map).bindPopup("Ember Cafe");

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section className="visit-us-container">
      <div className="container">
        <div className="header">
          <h1>visit us</h1>
        </div>
        <div className="content">
          <div className="left">
            <p>
              We look forward to welcoming you for a peaceful break, a taste of
              our fresh coffee, or just to say hello.
            </p>
            <div className="info">
              <div className="address">
                <IoLocationOutline />
                <div className="text">
                  <p>address</p>
                  <p>123 Main St, Anytown, USA</p>
                </div>
              </div>
              <div className="hours">
                <TbClockHour4 />
                <div className="text">
                  <p>opening hours</p>
                  <p>Daily: 08:00 - 22:00</p>
                </div>
              </div>
              <div className="contact">
                <FiPhone />
                <div className="text">
                  <p>contact</p>
                  <p>Phone: 555-1234</p>
                </div>
              </div>
            </div>
            <div className="btns">
              <button onClick={() => navigate("/find-your-cafe")}>
                <MdOutlineDirections /> get directions
              </button>
              <button onClick={() => navigate("/contact")}>contact us</button>
            </div>
          </div>
          <div className="right">
            <div className="info">
              <p>Anytown</p>
              <p>123 Main St, Anytown, USA</p>
              <p>No reviews</p>
            </div>
            <div ref={mapRef} className="map" aria-label="Ember Cafe map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
