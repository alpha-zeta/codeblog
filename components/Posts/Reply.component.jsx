import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../Misc/Header.components";
import { firestore } from "./../../utils/firebase";
import { MdDeleteSweep } from "react-icons/md";
import DateComp from "../Misc/DateComp.componenet";
function Reply(props) {
  const [writer, setWriter] = useState(null);
  useEffect(() => {
    if (props.uid != null) {
      firestore
        .collection("users")
        .doc(props.uid)
        .get()
        .then((snapshot) => {
          setWriter({ id: snapshot.id, ...snapshot.data() });
        });
    } else {
      setWriter(null);
    }
  }, [props.uid]);
  const handleDelete = (e) => {
    firestore
      .collection("replies")
      .doc(props.rid)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div>
      {writer != null ? (
        <div>
          <div className="flex items-center bg-gray-300 dark:bg-gray-600 px-4 py-2 tracking-wider relative">
            <div className="avatar overflow-hidden bg-purple-accent inline-block mr-2 relative">
              <Image src={writer.img} layout="fill" objectFit="cover" />
            </div>
            <Header
              weight="h3"
              type="Small"
              className={
                props.userId == writer.id
                  ? "text-green-700 dark:text-green-400 inline-block"
                  : "text-gray-800 dark:text-gray-200 inline-block"
              }
            >
              {writer.displayName}
            </Header>
            <div className="inline-flex absolute right-0 items-center">
              {props.createdAt != null ? (
                <div className="inline-block mr-4">
                  <DateComp
                    className="colorCl text-sm"
                    ms={props.createdAt.toDate().getTime()}
                    bypass="false"
                  />
                </div>
              ) : (
                <div className="inline-block mr-4">
                  <DateComp className="colorCl text-sm" ms={0} bypass="true" />
                </div>
              )}
              {props.userId == writer.id ? (
                <div
                  className="inline-block text-lg cursor-pointer mr-4"
                  onClick={handleDelete}
                >
                  <MdDeleteSweep />
                </div>
              ) : null}
            </div>
          </div>
          <div className="px-4 py-2 text-md sm:text-base text-gray-800 dark:text-gray-300">
            <p>{props.reply}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Reply;
