import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

function findService(pathArray, data) {
  let current = data;

  for (let part of pathArray) {
    current = current?.[part];
  }

  return current;
}

function ServiceDetails() {
  const { name } = useParams();

  const path = decodeURIComponent(name).split(">");

  const current = findService(path, servicesData);

  if (!current) return <p>Nije pronađeno</p>;

  const hasChildren = Object.keys(current).some(
    (key) => key !== "description" && key !== "price"
  );

  return (
    <div className="p-10 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl text-yellow-500 mb-6">
        {path[path.length - 1]}
      </h1>
      {current.description && (
  <p className="text-gray-400 mb-6 max-w-xl mx-auto">
    {current.description}
  </p>
)}

      {hasChildren ? (
        <div className="grid md:grid-cols-3 gap-6">
          {Object.keys(current)
            .filter((key) => key !== "description" && key !== "price")
            .map((child) => (
              <Link
                key={child}
                to={`/services/${[...path, child].join(">")}`}
                className="card hover:scale-105"
              >
                {child}
              </Link>
            ))}
        </div>
      ) : (
        <div className="mt-6 max-w-xl mx-auto">
          <p className="text-gray-400 text-lg">
            {current.description || "Opis uskoro..."}
          </p>

          {current.price && (
            <p className="mt-4 text-yellow-500 font-semibold text-xl">
              {current.price}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ServiceDetails;
