import Blogs from "@/components/news/blog";
import NewsAndUpdate from "@/components/news/newsUpdate";



const NewsAndUpdates = () => {
    return (
      <div>
      <h1 className="text-center font-medium text-4xl text-gray-600 mb-10 mt-10">News and Updates  </h1>
        {/* Add your buttons here */}
       
        <NewsAndUpdate/>
        <NewsAndUpdate/>
        <NewsAndUpdate/>
        <h1 className="text-center	">Explore More Blogs</h1>
        <Blogs/>
      </div>
    );
  };
  
  export default NewsAndUpdates;
  