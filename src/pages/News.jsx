import axios from "axios";
import React, { useEffect, useState } from "react";



const News = () => {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=cybersecurity&from=2025-03-11&sortBy=publishedAt&apiKey=aa21227ac0bd466ba222d7f13a2d1d95`
    );
    setData(response.data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    {loading ? (
      Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="p-4 m-5 bg-white border border-gray-200 rounded-lg shadow-sm animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-32"></div>
        </div>
      ))
    ) : (
      data.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="p-4 m-5 text-center bg-white border border-gray-200 rounded-lg hover:shadow-blue-700 shadow-sm sm:p-8 dark:bg-white dark:border-white"
          >
            <h5 className="mb-2 text-3xl font-bold text-gray-100 dark:text-black">
              <div>
                <p>{elem.author}</p>
              </div>
            </h5>

            <h6>{elem.description}</h6>

            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-800">
              {elem.title}
            </p>

            <a
              href={elem.url}
              className="inline-flex font-medium items-center text-blue-600 animate-bounce hover:underline"
            >
              View Article
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              ></svg>
            </a>
          </div>
        );
      })
    )}
  </>
  )
}

export default News