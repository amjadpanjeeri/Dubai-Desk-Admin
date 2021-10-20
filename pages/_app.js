import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
// import Signin from "./signin";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
