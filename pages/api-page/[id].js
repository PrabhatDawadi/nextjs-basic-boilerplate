import CustomHead from "../../components/layout/CustomHead";
import { API_URL } from "../../js/config";
import { httpCall } from "../../js/http";

const PostSingle = ({ post }) => {

    return (
        <>
            {post ?
                <>
                    <CustomHead
                        title={`${post.title}`}
                        description=""
                        keywords=""
                        image=""
                        url=""
                    />                    
                    <section>
                        <pre>{JSON.stringify(post)}</pre>
                    </section>
                </>
                :
                <>
                    <CustomHead
                        title="Not found"
                        description=""
                        keywords=""
                        image=""
                        url=""
                    />
                    <section>
                        <h1>No API Data found</h1>
                    </section>
                </>
            }
        </>
    );
}

PostSingle.getInitialProps = async function({ query }) {

    const URL = API_URL + '/' + query.id;

    // const apidata = await httpCall('get', URL )
    //     .then((response) => {
    //         return response.data;
    //     })
    //     .catch((error) => {
    //         return null;
    //     });
    // Uncomment this

    const apiData = {
        title: 'Data 1 Title',
        slug: 'data-1'
    };

    return {
        post: apiData ? apiData : {}
    }
};

export default PostSingle;