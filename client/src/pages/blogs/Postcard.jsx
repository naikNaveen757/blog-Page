import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../redux/features/blogs/blogsSlice';
import Card from "./Card";

function Postcard() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(state => state.blogs);

  //dispatch action to get blogs
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  //paination
  const [currentPage, setCurrentpage] = useState(1);
  const blogsPerPage = 5;
  const startIndex = ((currentPage - 1) * blogsPerPage);
  const endIndex = currentPage * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);
  console.log(paginatedBlogs);

  
  const handlePageChange = (nextpage) => {
    setCurrentpage(nextpage)
  }
  //console.log(paginatedBlogs);

  return (
    <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
    <div className="w-full lg:w-2/3">

      {!isError && !isLoading && paginatedBlogs?.length > 0 ? (<div>
        {paginatedBlogs.map((blog, index) => (<Card blog={blog} key={index} />
        ))}
        {/* pagination */}
        <div className='space-x-2'>
          <button className='px-2 bg-red-500 text-white rounded' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>previous</button>
          <span>{currentPage}</span>
          <button className='px-2 bg-blue-500 text-white rounded' onClick={() => handlePageChange(currentPage + 1)} >Next</button>
        </div>
      </div>
      ) : (
        <div className="col-span-12">No blogs found!</div>
      )}
    </div>
    </div>
  )
}

export default Postcard