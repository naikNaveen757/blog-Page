import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaRegComment,FaRegHeart,FaArrowRight } from "react-icons/fa";
import {useDispatch,useSelector} from "react-redux"
import { fetchBlog } from '../../redux/features/singleBlog/blogSlice';

function Singleblogs() {
  const { id } = useParams();
 // console.log(id);
  const dispatch = useDispatch();
  const {blog,isLoading }= useSelector((state) => state.blog);

  useEffect(() =>{
    dispatch(fetchBlog(id))
  }, [dispatch,id]) ;
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <article className="mt-8">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
          {blog.title}

          </h2>
          <a
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            Cryptocurrency
          </a>
        </div>

        <img
        src={blog.image}
          className="w-full object-cover lg:rounded"
          style={{ height: "28em" }}
          alt="Blog Cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-8 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
    <p> {blog.content}
          </p>
        </div>

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img
                src={blog.authorPic}
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  {" "}
                  {blog.author}
                </p>
                <p className="font-semibold text-gray-600 text-xs"> {blog.category} </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
            {blog.author} writes about technology Yourself required no at thoughts
              delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow {blog.author}
              <FaRegHeart className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 md:w-1/2">
        <div className="flex items-center space-x-2">
          <FaRegComment className="text-gray-600" />
          <span className="text-gray-600">15 comments</span>
        </div>
        <div className="flex items-center space-x-2 mt-8">
          <FaRegHeart className="text-red-500" />
          <span className="text-gray-600">120 likes</span>
        </div>
        <a
          href="/"
          className="text-green-700 inline-flex items-center justify-center"
        >
          Back to Blogs
          <FaArrowRight className="ml-2" />
        </a>
      </div>

      {/* <PopularBlog /> */}
    </article>
    

  )
}

export default Singleblogs