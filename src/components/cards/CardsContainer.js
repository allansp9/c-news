import React from "react";

import filterInterests from "../../utils";
import Headline from "./Headline";
import Featured from "./Featured";
import DefaultArticle from "./DefaultArticle";
import HomeLoader from "../loading/HomeLoader";
import { useFetch } from "../../hooks";

const ErrorFallback = ({ error }) => {
  return (
    <div
      role="alert"
      className="w-full h-screen -mt-14 pt-14 flex justify-center items-center"
    >
      {error}
    </div>
  );
};

const NoArticlesFound = () => {
  return (
    <div className="w-full h-screen -mt-14 flex items-center justify-center">
      <div className="text-base mobile:text-3xl font-open">
        No articles found in this category.
      </div>
    </div>
  );
};

const CardsContainer = ({ interests }) => {
  const { data, error, status } = useFetch(
    "https://blog.cheesecakelabs.com/challenge/"
  );

  let filteredData;

  if (status === "fetched") {
    filteredData = filterInterests(data, interests);
  }

  return (
    <>
      {status === "fetching" && <HomeLoader />}
      {error && <ErrorFallback error={error} />}
      {status === "fetched" && filteredData.length >= 1 && (
        <div className="container min-w-min mx-auto grid grid-cols-1 py-20 px-5 mobile:grid-cols-2 desktop:grid-cols-4">
          <div className="mobile:col-span-2 desktop:col-span-2 desktop:mr-6">
            <Headline info={filteredData} />
          </div>
          {filteredData.length > 1 && (
            <div className="mobile:col-span-2 mobile:grid mobile:grid-cols-2 mobile:gap-x-6 desktop:col-span-2">
              {filteredData.slice(1, 3).map((item, index) => (
                <Featured info={item} key={index} />
              ))}
            </div>
          )}
          {filteredData.length > 3 && (
            <>
              <hr className="hidden mb-8 desktop:block desktop:col-span-full bg-gray-600" />
              <div className="mobile:col-span-2 mobile:grid mobile:grid-cols-2 mobile:gap-x-6 desktop:grid-cols-3 desktop:col-span-full">
                {filteredData.slice(3).map((item, index) => (
                  <DefaultArticle info={item} key={index} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      {status === "fetched" && !error && filteredData.length === 0 && (
        <NoArticlesFound />
      )}
    </>
  );
};

export default CardsContainer;
