
import PropTypes from 'prop-types';
const Thing = ({thing}) => {
    const {title} = thing
   
    return (
        <div>
          <h3>{title}</h3>  
        </div>
    );
};
Thing.propTypes ={
    thing:PropTypes.object.isRequired
}
export default Thing;