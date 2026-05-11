import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl text-yellow-500 mb-8 text-center">
        Usluge
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.keys(servicesData).map((name) => (
          <Link
            key={name}
            to={`/services/${name}`}
            className="card text-center hover:scale-105"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;