import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailProduct } from "../store/actions/actionProducts";

export default function Details() {
  let { id } = useParams();
  let data = useSelector((state) => state.productsReducer.detail);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, []);

  console.log(data);
  // console.log(data[Category]);
  // console.log(data[Category].name);

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img alt={`${detail.name} guitar`} src={detail.mainImg} />
            </div>

            <div className="sticky top-0">
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                {detail.Category.name}
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {detail.name}
                  </h1>

                  <p className="text-sm">By {detail.User.username}</p>
                </div>

                <p className="text-lg font-bold">
                  {" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(detail.price)}
                </p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p>{detail.description}</p>
                </div>

                <button className="mt-2 text-sm font-medium underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
