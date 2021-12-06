import CustomHead from '../components/layout/CustomHead';
import { API_URL } from "../js/config";
import { httpCall } from '../js/http';
import Link from 'next/link';

export const getStaticProps = async () => {

    // const apiData = await httpCall('get',API_URL)
    //     .then((response) => {
    //         return response.data;
    //     })
    //     .catch((error) => {
    //         return null;
    //     });
    // Uncomment this
    
    const apiData = [{
        title: 'Data 1 Title',
        slug: 'data-1'
    },
    {
        title: 'Data 2 Title',
        slug: 'data-2'
    }];
    
    return {
        props: {
            apiData
        }
    }
}

const APIDataSinglePage = ({ apiData }) => {

    return (
        <>
            <CustomHead
                title="API Page"
                description=""
                keywords=""
                image=""
                url=""
            />
            <section>
                <h1>API Page</h1>
                <br/>
                {apiData.map((w, i) =>
                    <div key={i}>
                        <h4>{w.title}</h4>
                        <Link href={`/api-page/${w.slug}`}>
                            <a>
                                <button>Click to view</button>
                            </a>
                        </Link>
                        <br/><br/>
                    </div>
                )}
            </section>
        </>
    );
}

export default APIDataSinglePage;





