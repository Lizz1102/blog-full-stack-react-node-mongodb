import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
  const { articleId } = useParams();

  const article = articles.find((article) => article.name === articleId);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        //Note: don't use index as key like this if paragraphs may change
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
