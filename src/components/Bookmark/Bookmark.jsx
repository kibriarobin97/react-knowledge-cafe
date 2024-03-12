import PropTypes from 'prop-types';
import Bookmarked from '../Bookmarked/Bookmarked';

const Bookmark = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 p-4 space-y-4 rounded-lg ">
            <div className='border border-purple-400 p-4 rounded-lg bg-gray-200'>
                <h2 className='text-purple-500 text-2xl text-center font-bold'>Spent Time on Read: {readingTime}</h2>
            </div>
            <h3 className="text-2xl text-center font-bold">Bookmarked Blogs: {bookmarks.length}</h3>
            <div className='mt-16'>
                {
                    bookmarks.map(bookmark => <Bookmarked key={bookmark.id} bookmark={bookmark}></Bookmarked>)
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmark;