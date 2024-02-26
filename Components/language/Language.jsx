import React from "react";
import { useRouter } from "next/router";
import azerbaijanFlag from "../../public/images/Azerbaijan.png";
import englishFlag from "../../public/images/English.png";
import russianFlag from "../../public/images/Russia.png";
import Image from "next/image";
export default function Language() {
  const router = useRouter();
  const [showFlags, setShowFlags] = React.useState(false);

  const toggleFlags = () => {
    setShowFlags(!showFlags);
  };

  const handleFlagClick = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
    setShowFlags(false);
  };

  return (
    <div>
      <button onClick={toggleFlags}>
        <Image src={englishFlag} alt="English Flag" width={50} height={30} />
      </button>
      {showFlags && (
        <div>
          <button onClick={() => handleFlagClick("az")}>
            <Image
              src={azerbaijanFlag}
              alt="Azerbaijan Flag"
              width={50}
              height={30}
            />
          </button>
          <button onClick={() => handleFlagClick("en")}>
            <Image
              src={englishFlag}
              alt="English Flag"
              width={50}
              height={30}
            />
          </button>
          <button onClick={() => handleFlagClick("ru")}>
            <Image
              src={russianFlag}
              alt="Russian Flag"
              width={50}
              height={30}
            />
          </button>
        </div>
      )}
    </div>
  );
}
