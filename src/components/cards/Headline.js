import { Link } from "react-router-dom";

const Headline = ({ info }) => {
  const { title, authors, content, image_url, tags } = info[0];

  const tag = tags[0].label.toLowerCase();

  return (
    <article className="headline mobile:pb-16 desktop:pb-0">
      <h3 className={`text-tag ${tag}`}>{tag}</h3>

      <div className="img-container">
        <img
          src={image_url}
          alt="article headline"
          className="w-full h-185 mobile:h-460 desktop:h-354"
        />
        <div className="hidden desktop:flex overlay opacity-0 hover:opacity-100 transition duration-300 absolute top-0 left-0 w-full h-full items-center justify-center">
          <button className="img-overlay-btn bg-black bg-opacity-50 border border-white text-white font-lato inline-block">
            <Link to="/" className="inline-flex items-center h-full">
              Read More
            </Link>
          </button>
        </div>
      </div>
      <h1 className="text-base font-lato my-4 mobile:text-3xl">{title}</h1>
      <h5 className="flex items-center gap-x-2 text-sm italic font-open text-gray-500 mb-5">
        <span className="inline-block flex-none rounded-full h-8 w-8 desktop:h-11 desktop:w-11 bg-gray-300"></span>{" "}
        by {authors}
      </h5>
      <p className="text-sm font-open text-gray-700 pb-20 mobile:hidden">
        {content}
      </p>
    </article>
  );
};

export default Headline;
