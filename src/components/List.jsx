import { useSelector } from "react-redux";

const ConnectedList = () => {
  const articles = useSelector(state => state.articles);

  console.log(articles, "hey")
  return (
    <ul className="list-group list-group-flush">
      { articles.map(article => (
        <li className="list-group-item">
          {article}
        </li>
      ))
    }
    </ul>
  );
};
export default ConnectedList;
