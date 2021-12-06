import Layout from '../components/layout/Layout';
import "../public/css/base.scss";
import "../public/css/responsive.scss";

function MyApp({ Component, pageProps }) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;















