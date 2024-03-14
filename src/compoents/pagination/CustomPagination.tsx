import style from "./CustomPagination.module.scss";
import ReactPaginate from "react-paginate";

type CustomPaginationType = {
    pageCount: number
    setCurrentPage: (tr: number) => void
    currentPage: number
}
export const CustomPagination = (props: CustomPaginationType) => {

    const {pageCount, setCurrentPage, currentPage} = {...props}

    const handlePageClick = (e: { selected: number }) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1)
    };

    return (
        <div className={style.PaginationBlock}>
            <ReactPaginate
                previousLabel="Назад"
                forcePage={currentPage - 1}
                nextLabel="Далее"
                breakLabel="..."
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={style.pagination}
                activeClassName={style.active}
                disabledLinkClassName={style.DisabledLinkClassName}
                disabledClassName={style.DisabledClassName}
            />
        </div>
    )
}