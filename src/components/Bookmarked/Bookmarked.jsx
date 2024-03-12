import PropTypes from 'prop-types';
const Bookmarked = ({ bookmark }) => {

    const { title } = bookmark;

    return (
        <div className='mb-4 bg-slate-200 p-4 m-4 rounded-lg'>
            <h3 className='text-1xl font-semibold'>{title}</h3>
        </div>
    );
};

Bookmarked.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmarked;