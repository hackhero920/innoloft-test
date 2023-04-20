import { Link, useLocation } from "react-router-dom";
import { HiChevronRight, HiOutlineHome } from "react-icons/hi";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  const breadcrumbItems = [
    {
      text: <HiOutlineHome />,
      link: "/",
    },
    ...pathSegments.map((segment, index) => ({
      text: segment.charAt(0).toUpperCase() + segment.slice(1),
      link: "/" + pathSegments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <nav className="text-gray-500 text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < breadcrumbItems.length - 1 ? (
              <>
                <Link to={item.link} className="px-2">
                  {item.text}
                </Link>
                <HiChevronRight className="w-5 h-5 font-bold" />
              </>
            ) : (
              <span className="px-2">{item.text}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
