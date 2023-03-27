import Head from "next/head";
import dynamic from "next/dynamic";
export default function Home() {
  const Editor = dynamic(() => import("../components/Editor"), { ssr: false });
  return (
    <>
      <Head>
        <title>editorJS</title>
        <meta name="description" content="Playing around with editorJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Playing around with editorJS</h1>
        <p>
          Made with ❤️ by{" "}
          <a href="https://www.twitter.com/maitrakhatri" target="_blank">
            Maitra Khatri
          </a>
        </p>
        <Editor />
      </main>
    </>
  );
}
