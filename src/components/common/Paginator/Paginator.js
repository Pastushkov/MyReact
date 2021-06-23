import style from "./paginator.module.css";

let Paginator = ({totalUsersCount,pageSize,onPageChange,currentPage}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p}
            onClick={(e) => {
              onPageChange(p);
            }}
            className={
              currentPage === p ? style.selectedPage : style.page
            }
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator
