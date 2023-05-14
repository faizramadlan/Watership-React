import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <a href="#" class="group relative block overflow-hidden text-white">
      <img
        src={data.mainImg}
        alt=""
        class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div class="relative border border-gray-100 bg-slate-400 p-6">
        <span class="whitespace-nowrap bg-slate-900 px-3 py-1.5 text-xs font-medium">
          {data.Category.name}
        </span>

        <h3 class="mt-4 text-lg font-medium">{data.name}</h3>
        <h3 class="mt-1 text-s font-small">By {data.User.username}</h3>

        <p class="mt-1.5 text-sm">
          {" "}
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(data.price)}
        </p>

        <form class="mt-4">
          <Link
            to={`/courses/${data.id}`}
            class="block w-full rounded bg-slate-900 p-4 text-sm font-medium transition hover:scale-105 align-middle"
          >
            Details
          </Link>
        </form>
      </div>
    </a>
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
