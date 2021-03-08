import Head from "next/head";
import META from "../components/Meta.components";

const about = (props) => {
  return (
    <div>
      <META
        title="About"
        description="About page"
        keywords="Get-coded about details"
      ></META>
      <h1>About</h1>
      <p>Hey its me yolou</p>
    </div>
  );
};
export default about;
