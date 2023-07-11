import Head from "next/head"

const MetaHead = ({title,desc}) => {

    return(
        <>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6330491343267680"
         crossorigin="anonymous"></script>
          <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            {/* Other meta tags */}
          </Head>
          {/* Page content */}
        </>
    )
}

export default MetaHead