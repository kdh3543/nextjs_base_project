import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }: any) {
  return (
    <Layout>
      1234
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date} */}
    </Layout>
  );
}

// export async function getStaticProps({ params }: any) {
//   const postData = getPostData(params.id);
//   return {
//     postData,
//   };
// }
