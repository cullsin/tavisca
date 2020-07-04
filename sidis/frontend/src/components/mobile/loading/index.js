import React from 'react';
import { ClipLoader } from 'react-spinners';
import { connect } from "react-redux";

class Loading extends React.Component {
    render() {
      console.log(this.props.loading)
      return (
        <React.Fragment> 
        <div className='sweet-loading'>
          <ClipLoader
            sizeUnit={"pt"}
            color={"red"}
            loading={true}
          />
        </div>
        </React.Fragment>
      )
    }
}

const mapStateToProps = state => ({
    loading:state.loading.items
});

export default connect(mapStateToProps)(Loading);