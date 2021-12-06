import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {

	const router = useRouter();
    
  	return (
  		<main>
			<Header />
                <section className="content-section">{children}</section>
			<Footer />
  		</main>
  	);
}

export default Layout;