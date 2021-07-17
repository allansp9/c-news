import React from "react";

export const HeadlineLoader = () => {
  return (
    <div className="mb-20 desktop:pb-0">
      <div className="h-4 bg-gray-300 rounded w-11 mb-3"></div>
      <div className="h-185 mobile:h-460 desktop:h-354 w-full bg-gray-300 rounded mb-4"></div>

      <div className="h-4 mb-2 mobile:h-6 bg-gray-300 rounded"></div>
      <div className="h-4 mb-3 mobile:h-6 bg-gray-300 rounded"></div>
      <div className="flex items-center gap-x-2">
        <div className="flex-none rounded-full h-8 w-8 desktop:h-11 desktop:w-11 bg-gray-300"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </div>
      <div className="mobile:hidden">
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
      </div>
    </div>
  );
};

const FeaturedLoader = () => {
  return (
    <div className="mb-20">
      <div className="h-4 bg-gray-300 rounded w-11 mb-3"></div>

      <div className="h-185 mobile:h-220 desktop:h-167 bg-gray-300 rounded"></div>

      <div className="bg-gray-300 rounded w-full h-16 my-2"></div>
      <div className="flex items-center gap-x-2 mb-5">
        <div className="flex-none rounded-full h-8 w-8 bg-gray-300"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </div>
      <div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
        <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
      </div>
    </div>
  );
};

const DefaultArticleLoader = () => {
  return (
    <div className="mb-20">
      <div className="h-4 bg-gray-300 rounded w-11 mb-3"></div>

      <div className="bg-gray-300 rounded w-full h-16 my-2"></div>
      <div className="flex items-center gap-x-2 mb-5">
        <div className="flex-none rounded-full h-8 w-8 bg-gray-300"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </div>
      <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
      <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
      <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
      <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
      <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
      <div className="bg-gray-300 rounded w-full h-4 my-2"></div>
    </div>
  );
};

const HomeLoader = () => {
  return (
    <div className="animate-pulse container min-w-min mx-auto grid grid-cols-1 py-20 px-5 mobile:grid-cols-2 desktop:grid-cols-4">
      <div className="mobile:col-span-2 desktop:col-span-2 desktop:mr-6">
        <HeadlineLoader />
      </div>
      <div className="mobile:col-span-2 mobile:grid mobile:grid-cols-2 mobile:gap-x-6 desktop:col-span-2">
        {[1, 2].map((index) => (
          <FeaturedLoader key={index} />
        ))}
      </div>
      <>
        <hr className="hidden mb-8 desktop:block desktop:col-span-full bg-gray-600" />
        <div className="mobile:col-span-2 mobile:grid mobile:grid-cols-2 mobile:gap-x-6 desktop:grid-cols-3 desktop:col-span-full">
          {[1, 2, 3].map((index) => (
            <DefaultArticleLoader key={index} />
          ))}
        </div>
      </>
    </div>
  );
};

export default HomeLoader;
