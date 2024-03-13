import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtag} = blog;

    return (
        <div className='my-20 space-y-4'>
            <img className='w-full object-cover rounded-xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <div className='w-14 h-14 rounded-full'>
                        <img src={author_img} className='rounded-full w-14 h-14' alt="" />
                        </div>
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    className='border-none'
                    ><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p className='text-[#11111199]'>
                {
                    hashtag.map((hash, idx) => <span className='mr-3' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(id, reading_time)}
            className='text-purple-500 font-bold underline border-none'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blog;