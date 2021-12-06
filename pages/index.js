import CustomHead from '../components/layout/CustomHead';
import Link from 'next/link';
import { API_URL } from '../js/config';
import { httpCall } from '../js/http';

export const getStaticProps = async () => {

    // const apidata = await httpCall('get',API_URL)
    //     .then((response) => {
    //         return response.data;
    //     })
    //     .catch((error) => {
    //         return null;
    //     });
    // Uncomment this
    
    const apidata = [{
        title: 'Data 1 Title',
        slug: 'data-1'
    },
    {
        title: 'Data 2 Title',
        slug: 'data-2'
    }];
    
    return {
        props: {
            apidata
        }
    }
}

const Home = ({ apidata }) => {

    return (
        <>
            <CustomHead
                title="Home"
                description="Home"
                keywords=""
                image=""
                url=""
            />
            <h1>Home Page</h1>
            <br/>
            <p>API Response:</p>
            <div>
                {apidata.map((w, i) =>
                    <div key={i}>
                        <h4>{w.title}</h4>
                        <Link href={`/api-page/${w.slug}`}>
                            <a>
                                <button>Click to view</button>
                            </a>
                        </Link>
                        <br />
                        <br/>
                    </div>
                )}
            </div>
            <pre>{JSON.stringify(apidata)}</pre>
        </>
    )
}

export default Home;
