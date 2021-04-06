import Image from "next/image";
import Header from "../Misc/Header.components";
import Desc from "../Misc/Desc.components";
function AuthorCard(props) {
  return (
    <div
      className={
        "m-auto round bg-gray-300 dark:bg-gray-800 text-gray-200 p-4 lg:p-8 py-4 rounded relative grid grid-cols-5 " +
        props.className
      }
    >
      <div className="relative w-24 h-24 block m-auto rounded-full bg-gradient-to-t from-yellow-100 to-green-500 overflow-hidden col-span-2 sm:col-span-1 lg:col-span-5">
        <Image src="/images/profile.png" layout="fill" priority />
      </div>
      <div className="col-span-3 sm:col-span-4 lg:col-span-5">
        <Header weight="h3" type="Big" className="inline-block">
          Anish Majhi
        </Header>
        <Desc className="text-gray-700 dark:text-gray-200">
          A Electronics engineering student, a tech enthusiast and a passionate
          web developer.
        </Desc>
      </div>
    </div>
  );
}

export default AuthorCard;
