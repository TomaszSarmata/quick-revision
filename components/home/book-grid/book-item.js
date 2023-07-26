import { useState } from "react";

export default function BookItem({ title, author }) {
  const [like, setLike] = useState(0);
  const [disLike, setDislike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDislike = () => {
    setDislike(disLike + 1);
  };

  return (
    <div>
      {" "}
      <div id="book1" className="bg-green-100 p-4 ">
        <p className="title mb-4 text-center text-xl font-medium">{title}</p>
        <p className="author text-sm text-gray-700 text-center">{author}</p>
        <div className="flex flex-row justify-center gap-5">
          <div>
            <p className="text-red-600 font-bold mt-5 text-center">
              {like} likes
            </p>
            <div className="flex flex-row justify-center w-full">
              <button
                className="bg-blue-500 py-1 px-4 rounded-lg mt-5 text-white"
                onClick={handleLike}
              >
                Like ❤️
              </button>
            </div>
          </div>
          <div>
            <p className="text-blue-600 font-bold mt-5 text-center">
              {disLike} dislikes
            </p>
            <div className="flex flex-row justify-center w-full">
              <button
                className="bg-blue-500 py-1 px-4 rounded-lg mt-5 text-white"
                onClick={handleDislike}
              >
                Dislike 👎
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
