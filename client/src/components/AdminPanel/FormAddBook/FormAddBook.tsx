import React, { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import api from "../../../api";
import { AxiosResponse } from "axios";

interface IAuthor {
  _id: string;
  firstName: string;
  lastName: string;
}

type Option = {
  value: string;
  label: string;
};

const FormAddBook = () => {
  const [authorOptions, setAuthorOptions] = useState<Option[]>([]);

  const [title, setTitle] = useState<string>("");
  const [publishedYear, setPublishedYear] = useState<number>();
  const [genres, setGenres] = useState<readonly Option[]>([]);
  const [pages, setPages] = useState<number>();
  const [rating, setRating] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const [image, setImage] = useState<string>("");
  const [selectedAuthorId, setSelectedAuthorId] = useState<readonly Option[]>(
    [],
  );

  useEffect(() => {
    const getAuthors = async () => {
      const res: AxiosResponse<IAuthor[]> = await api.get("api/v1/authors");
      const data: IAuthor[] = res.data;
      console.log(data);
      data.forEach((author) => {
        setAuthorOptions((prev) => [
          ...prev,
          {
            value: author._id,
            label: `${author.firstName} ${author.lastName}`,
          },
        ]);
      });
    };
    getAuthors();
  }, []);

  const placeholders = ["Title", "Publish Year", "Pages", "Rating", "Quantity"];
  const genreOptions: Option[] = [
    { value: "horror", label: "Horror" },
    { value: "sci-fi", label: "Sci-fi" },
    { value: "history", label: "History" },
  ];

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      let baseUrl: string | ArrayBuffer | null = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseUrl = reader.result;
        resolve(String(baseUrl));
      };
    });
  };

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!e.target.files) return;
    const base64: string = await getBase64(e.target.files[0]);
    setImage(base64);
  };

  return (
    <div className="w-full bg-green-300 py-20">
      <div className="container mx-auto">
        <form>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[0]}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[1]}
              value={publishedYear}
              onChange={(e) => setPublishedYear(parseInt(e.target.value))}
            />
            <div className="w-1/2 my-4">
              <p className="font-bold italic text-white">Genres:</p>
            </div>
            <div className="w-1/2 ">
              <Select
                options={genreOptions}
                isMulti={true}
                placeholder={"Genre"}
                className="w-full text-black mb-4"
                value={genres}
                onChange={(option: MultiValue<Option>) => setGenres(option)}
              />
            </div>

            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[2]}
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[3]}
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[4]}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <div className="w-1/2 mt-3">
              <Select
                placeholder={"Author"}
                isMulti={true}
                className="w-full"
                options={authorOptions}
                value={selectedAuthorId}
                onChange={(option: MultiValue<Option>) =>
                  setSelectedAuthorId(option)
                }
              />
            </div>

            <input
              type="file"
              name="file"
              className="w-1/2 my-10"
              onChange={handleFileInputChange}
            />

            <button
              type="submit"
              className="bg-green-600 px-2 py-3 text-white rounded-md"
            >
              Add new book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddBook;
