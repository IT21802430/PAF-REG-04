import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PublicationBody = (publication: any) => {
  const isQuote = true;
  const isPhoto = publication.imageName == "default.png";
  const { push } = useRouter();

  return (
    <div className="mt-4">
      {isQuote && (
        <div className="border-l-4 border-gray-200 bg-gray-50 p-2 mt-4">
          <p className="text-gray-500 text-sm">
            {publication.publication.content}
          </p>
        </div>
      )}
      {isPhoto && (
        <Image
          src={publication.publication.imageName}
          alt="photo"
          width={200}
          height={200}
          className="w-full h-64 object-cover mt-4"
        />
      )}
    </div>
  );
};

export default PublicationBody;