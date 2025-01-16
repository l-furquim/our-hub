import Link from "next/link";
import type React from "react";

type HubContainerProps = {
  name: string,
  image: string,
  id: string
};

export const HubContainer: React.FC<HubContainerProps> = ({name, image, id}) => {

  return (
    <div className="w-full" key={id}>
      <Link className="w-full flex gap-2 justify-center items-center" href={`/hub/${id}`}>
        <img src={image} alt="Hub image" className="rounded-xl" width={32} height={32} />
        <p>{name.length > 13 ? name.slice(0, 13) + "..." : name}</p>
      </Link>
    </div>
  )
}