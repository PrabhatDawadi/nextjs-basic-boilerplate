import Head from 'next/head';

const CustomHead = (props) => {

    return (
    	<Head>
            <title>{props.title} - Common Title</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0"/>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />            
            <meta name="copyright" content="" />
            <meta name="robots" content="index, follow" />
            <meta name="DC.title" content={props.title} />        
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Prabhat Dawadi"/>
            <link rel="author" href="https://twitter.com/prabhatdawadi" />
            <link rel="publisher" href="https://prabhat.website" />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={props.image} />
            <meta property="og:site_name" content="" />
            <meta property="og:url" content={props.url} />
            <meta property="og:description" content={props.description} />
            <meta name="twitter:card" content="https://prabhat.website/" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:url" content={props.url} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={props.image} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default CustomHead;
