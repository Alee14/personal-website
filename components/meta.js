import Head from "next/head.js"

const Meta = ({title, description, keywords}) => {
    return (
        <Head>
            <meta name="description" content={description} />
            <meta name='keywords' content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet='utf-8' />

            <link rel="icon" href="/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/manifest.json"/>
            <meta name="msapplication-TileColor" content="#0e8106"/>
            <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#0e8106"/>

            <title>{`${title} - Andrew Lee`}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Andrew Lee',
    keywords: 'programming, personal website, webdev',
    description: 'Andrew\'s Personal Website'
}

export default Meta
