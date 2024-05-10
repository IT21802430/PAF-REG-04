import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthProvider";
import toast from "react-hot-toast";
import Router, { useRouter } from "next/router";
import type { NextPage } from "next";
import { UploadDropzone } from "@/utils/uploadthing";

const CreatePost: NextPage = () => {
  const [title, setTitle] = useState("");
  const [imageName, setImageName] = useState("");
  const [content, setContent] = useState("");
  const { push } = useRouter();

  const { isLoggedIn, token, currentUser } = useAuth();

  // check user loged if not redirect to home page ans toast warning
  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/");
      toast.error("You need to login first to create a post");
    }
  }, [isLoggedIn]);

  const handlePublish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      toast.error("Title is required");
      return;
    }

    if (content.length < 5) {
      toast.error("Content must be at least 8 characters long");
      return;
    }

    const load = toast.loading("Creating post...");

    try {
      const response = await fetch(
        `/api/create-post?userId=${currentUser.id}&categoryId=1`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            imageName: imageName,
            content: content,
            token: token,
          }),
        }
      );

      toast.dismiss(load);

      if (response.ok) {
        toast.success("Post created successfully");
        push("/");
      } else {
        toast.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(`Failed to create post : ${error}`);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <div className="py-8 px-4 sm:px-6 w-full sm:w-3/4 mx-auto">
        <form className="space-y-6" onSubmit={handlePublish} spellCheck="false">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="title"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-200 text-gray-900 focus:outline-none focus:ring-0 focus:border-gray-400 focus:z-10 sm:text-sm"
                placeholder="Enter your title address"
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            {imageName ? (
              <div>
                <Image
                  src={imageName}
                  alt="Post Image"
                  width={200}
                  height={200}
                  className="bg-cover w-full h-fit rounded-md overflow-hidden"
                />
              </div>
            ) : (
              <UploadDropzone
                className="w-full ut-button:bg-indigo-600 ut-button:ut-readying:bg-green-400 ut-button:text-gray-100"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  toast.success("Image Upload Completed");
                  setImageName(res[0].url);
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  toast.error("Image Upload Failed");
                  alert(`ERROR! ${error.message}`);
                }}
              />
            )}
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <div className="mt-1">
              <textarea
                id="content"
                name="content"
                autoComplete="content"
                rows={7}
                onChange={(e) => setContent(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-200 text-gray-900 focus:outline-none focus:ring-0 focus:border-gray-400 focus:z-10 sm:text-sm"
                placeholder="Enter your content..."
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
