import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import cn from "@/utils/cn";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { ChangeEvent, FC, MutableRefObject, useEffect, useState } from "react";
import Loader from "../Loader";
import PublicationPreview from "@/components/publication/PublicationPreview"; 
import { useClickAway, useDebounce } from "@uidotdev/usehooks";

interface SearchProps {
    placeholder?: string;
}
  
const Search: FC<SearchProps> = ({ placeholder = "Search…" }) => {
    const { pathname, push, query } = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState<any[]>([]);
    const debouncedSearchText = useDebounce<string>(searchText, 500);
    const [searchUsersLoading, setSearchUsersLoading] = useState(true);

    const reset = () => {
        setShowDropdown(false);
        setPosts([]);
        setSearchText("");
    };
  
    // close dropdown when pathname change
  
    useEffect(() => {
      reset();
    }, [pathname, query]);
  
    const dropdownRef = useClickAway(() => {
      reset();
    }) as MutableRefObject<HTMLDivElement>;
  
    const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
      const keyword = evt.target.value;
      setSearchText(keyword);
  
      if (keyword.length < 3) {
        return;
      }
  
      setSearchUsersLoading(true);
  
      fetch(`/api/search?keyword=${keyword}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setSearchUsersLoading(false);
        })
        .catch((err) => {
          console.error("Error while searching:", err);
          setSearchUsersLoading(false);
        });
      console.log("searching for", posts);
    };
  
    const handleKeyDown = (evt: ChangeEvent<HTMLFormElement>) => {
      evt.preventDefault();
      reset();
    };
  
    return (
      <div className="w-full">
        <form onSubmit={handleKeyDown}>
          <Input
            className="px-3 py-2 text-sm text-gray-800"
            iconLeft={<MagnifyingGlassIcon />}
            iconRight={
              <XMarkIcon
                className={cn(
                  "cursor-pointer",
                  searchText ? "visible" : "invisible"
                )}
                onClick={() => reset()}
              />
            }
            onChange={handleSearch}
            onClick={() => setShowDropdown(true)}
            placeholder={placeholder}
            type="text"
            value={searchText}
          />
        </form>
        {showDropdown ? (
          <div
            className="sm:absolute mt-2 flex w-full flex-col"
            ref={dropdownRef}
          >
            <Card
              as="div"
              forceRounded={true}
              className="z-[2] max-h-[80vh] sm:max-w-sm overflow-y-auto py-2"
            >
              {/* {!debouncedSearchText && <p>resent searches</p>} */}
              {searchUsersLoading ? (
                <Loader className="my-3" message="Searching users" small />
              ) : (
                <>
                  {posts.map((post) => (
                    <div className="cursor-pointer px-4 py-2" key={post.id}>
                      <PublicationPreview post={post} />
                    </div>
                  ))}
                  {posts.length === 0 ? (
                    <div className="px-4 py-2 text-gray-700">
                      Try searching for title or keywords
                    </div>
                  ) : null}
                </>
              )}
            </Card>
          </div>
        ) : null}
      </div>
    );
  };
  
  export default Search;