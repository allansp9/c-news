import React from "react";
import { Link } from "react-router-dom";

const Featured = ({ info }) => {
  const { title, authors, content, image_url, tags } = info;
  const tag = tags[0].label.toLowerCase();

  return (
    <article className="featured">
      <h3 className={`text-tag ${tag}`}>{tag}</h3>

      <div className="img-container">
        <img
          src={image_url}
          alt="article featured"
          className="w-full h-185 mobile:h-220 desktop:h-167"
        />
        <div className="hidden desktop:flex overlay opacity-0 hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full items-center justify-center">
          <button className="img-overlay-btn-small bg-black bg-opacity-50 border border-white text-white font-lato inline-block">
            <Link to="/" className="inline-flex items-center h-full">
              Read More
            </Link>
          </button>
        </div>
      </div>
      <h1 className="text-base font-lato my-4">{title}</h1>
      <h5 className="flex items-center gap-x-2 text-sm italic font-open text-gray-500 mb-5">
        <span className="flex-none inline-block rounded-full h-8 w-8 bg-gray-300"></span>{" "}
        by {authors}
      </h5>
      <p className="text-sm font-open text-gray-700 pb-20 desktop:p-0">
        {content}
      </p>
    </article>
  );
};

export default Featured;
