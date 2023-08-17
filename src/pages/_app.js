import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="sceneContainer">
      <Component {...pageProps} />
    </div>
  );
}
