import Head from "next/head";
import { NavBar } from "./Header";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
};

const Layout = ({ children, pageTitle, description }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <NavBar />
        <div className="content">{children}</div>
      </main>
    </>
  );
};

export { Layout };
