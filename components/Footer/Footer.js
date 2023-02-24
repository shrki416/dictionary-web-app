import Image from "next/image";
import Link from "next/link";
import { useId } from "react";

const Footer = ({ sourceUrls }) => {
  return (
    <footer>
      <p>{sourceUrls.length > 1 ? "Sources" : "Source"}</p>
      {sourceUrls.map((url) => {
        const uniqueId = useId();
        return (
          <div key={uniqueId}>
            <Link href={url}>
              {url}
              <span>
                <Image
                  src="./images/icon-new-window.svg"
                  alt="new window"
                  width={12}
                  height={12}
                />
              </span>
            </Link>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
