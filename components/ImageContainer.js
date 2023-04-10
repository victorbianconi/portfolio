import Image from "next/image";

export default function ImageContainer(props) {
  return (
    <div className="image-container">
      <Image src={props.src} alt={props.alt} fill quality={100} />
    </div>
  );
}
