import React, { useEffect, useState } from "react";

const Pagination = ({onPageChange,totalPages})=>{
    const [pages,setPages] = useState([])
    const [selectedPage,setSelectedPage] = useState(1);
    const THRESHOLD = 20;

    const setNewPageList = (pageNo)=>{
        let itemsLength = Math.min(THRESHOLD,totalPages);
        let itemOnLeft = Math.ceil(THRESHOLD / 2) - 1;
        let startingPage = Math.max(pageNo - itemOnLeft,1);

        if(startingPage + itemsLength > totalPages){
            startingPage = totalPages - itemsLength + 1;
        } 

        const list = Array.from({length: Math.min(totalPages, THRESHOLD)}, (_, i) => i +  startingPage);
        setPages(list);
    }

    const handleClick = (pageNo)=>{
        onPageChange(pageNo);
        setSelectedPage(pageNo);
        setNewPageList(pageNo);
    }

    useEffect(() => {
        const list = Array.from({length: Math.min(totalPages, THRESHOLD)}, (_, i) => i + 1);
        setPages(list);
    }, [totalPages]);


    return (
        <div className='pagination'>
            <button onClick={() => handleClick(selectedPage - 1)} disabled={selectedPage == pages[0]}>&lt;</button>
            {
                pages.map(page => (
                    <button
                        className={selectedPage === page ? 'active' : ''}
                        key={page}
                        onClick={() => handleClick(page)}
                    >{page}</button>
                ))
            }
            <button onClick={() => handleClick(selectedPage + 1)} disabled={selectedPage == pages[pages.length - 1]}>&gt;</button>
        </div>
    );
}

export default Pagination;