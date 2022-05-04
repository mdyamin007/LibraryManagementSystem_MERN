import React from "react";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  image: string;
}

const AddedUser = ({
  firstName,
  lastName,
  email,
  phone,
  address,
  gender,
  image,
}: IUser) => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="bg-gray-200 px-14 py-12 flex space-x-10 items-center w-1/2">
        <div className="w-1/4">
          <img
            src={image}
            className="h-44 w-44 object-contain"
            alt="book logo"
          />
        </div>
        <div className="px-10 py-4 bg-red-100 w-3/4">
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Email: {email}</p>
          <p>Phone: {[phone]}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    </div>
  );
};

export default AddedUser;
