import React from "react";

const DefaultArticle = ({ info }) => {
  const { title, authors, content, tags } = info;
  const tag = tags[0].label.toLowerCase();

  return (
    <article className="article">
      <h3 className={`text-tag ${tag}`}>{tag}</h3>

      <h1 className="text-base font-lato mb-4">{title}</h1>
      <h5 className="flex items-center gap-x-2 text-sm italic font-open text-gray-500 mb-5">
        <span className="flex-none inline-block rounded-full h-8 w-8 bg-gray-300"></span>{" "}
        by {authors}
      </h5>
      <p className="text-sm font-open text-gray-700 pb-20 desktop:pb-0">
        {content}
      </p>
    </article>
  );
};

export default DefaultArticle;
