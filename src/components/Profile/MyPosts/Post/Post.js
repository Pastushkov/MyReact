import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img alt="2" src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
      {props.message}
      <div>
        <span>like</span> {props.likeCounts}
      </div>
    </div>
  );
};

export default Post;
