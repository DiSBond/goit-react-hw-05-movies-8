import propTypes from 'prop-types';

const SearchBox = ({ onChange }) => {
  return (
    <div>
      <input type="text" onChange={e => onChange(e.target.value)} />
    </div>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  onChange: propTypes.func,
};
