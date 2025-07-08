import { Link } from "react-router-dom";

export default function Card({ data }) {
  const enrolled = (JSON.parse(localStorage.getItem('enrolledCourses') || '[]').find(course => course.id === data.id));
  return (
    <div className="card w-full max-w-xs bg-white dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden transition-colors duration-500 group hover:shadow-2xl hover:scale-105 relative">
      {enrolled && (
        <span className="absolute top-3 left-3 bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse z-10">Enrolled ✅</span>
      )}
      <figure className="relative w-full aspect-video bg-gray-800 rounded-t-xl overflow-hidden">
        <img
          src={data.mainImg}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={e => { e.target.src = '/fallback-image.png'; }}
        />
      </figure>
      <div className="card-body p-5 flex flex-col justify-between h-56">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="badge bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 text-xs font-semibold rounded">
              {data.Category.name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">By {data.User.username}</span>
          </div>
          <h2 className="card-title text-lg font-bold text-gray-900 dark:text-blue-200 mb-1 transition-colors duration-500">
            {data.name}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 line-clamp-2 transition-colors duration-500">
            {data.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold text-base text-green-600 dark:text-green-400">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data.price)}
          </span>
          <Link
            to={`/courses/${data.id}`}
            className="btn btn-primary btn-sm rounded transition-transform duration-200 hover:scale-105"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <div
            key={course.id}
            className="card w-full bg-base-100 shadow-xl sm:w-80 md:w-96 lg:w-120"
          >
            <figure>
              <img src={course.mainImg} alt={course.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {course.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{course.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Web Dev</div>
                <div className="badge badge-outline">React</div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div> */
}
