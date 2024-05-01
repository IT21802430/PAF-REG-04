import { PLACEHOLDER_IMAGE } from "@/utils/constant";
import { DetailedHTMLProps, ImgHTMLAttributes, Ref, SyntheticEvent, forwardRef, useCallback, useEffect, useState } from "react";

export const Image = forwardRef(function Image(
    {
        onError, 
        ...props
    }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 
    ref: Ref<HTMLImageElement>
) {
    const [imageLoadFailed, setImageLoadFailed] = useState(false); 

    const handleError = useCallback(
        (e: SyntheticEvent<HTMLImageElement, Event>) => {
          if (imageLoadFailed) {
            return;
          }
          setImageLoadFailed(true);
          if (onError) {
            onError(e);
          }
        },
        [imageLoadFailed, setImageLoadFailed, onError]
    ); 

    useEffect(() => {
        setImageLoadFailed(false);
    }, [props.src]); 

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            {...props}
            alt={props.alt || ""}
            onError={handleError}
            ref={ref}
            src={imageLoadFailed ? PLACEHOLDER_IMAGE : props.src}
        />
    );
});