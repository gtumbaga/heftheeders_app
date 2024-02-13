import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import Theme from "@/components/theme";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
        <Component {...pageProps} />
    </Theme>
  );
}
