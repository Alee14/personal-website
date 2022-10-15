import Head from "next/head.js"

const Meta = ({title, description, keywords}) => {
    return (
        <Head>
            <meta name="description" content={description} />
            <meta name='keywords' content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet='utf-8' />
            <link rel="icon" href="/favicon.ico" />
            <title>{title} - Andrew Lee</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Andrew Lee',
    keywords: 'programming, personal website, webdev',
    description: 'Andrew\'s Personal Website'
}

export default Meta
