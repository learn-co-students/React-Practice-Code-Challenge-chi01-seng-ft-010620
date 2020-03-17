import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => {
            return <Sushi 
            sushi={sushi} 
            eatSushi={props.eatSushi}/>
          })
        }
        <MoreButton changePage={props.changePage}/>
      </div>
    </Fragment>
  )
}

// class SushiContainer extends React.Component {

//   renderSushis = () => {
//     const sushis = this.props.sushis;
//     const sushiStart = 0;
//     const sushiEnd = 4;
//     if (sushis.length < 4) {
      
//     }
//     const fourSushis = this.props.sushis.slice(0, 4);
//     return fourSushis.map(sushi => {
//       return <Sushi 
//         handlePlateClick={this.props.handlePlateClick}
//         sushi={sushi} />
//     })
//   }

//   render() {
//     return (
//       <div className="belt">
//         {this.renderSushis()}
//         <MoreButton />
//       </div>
//     )
//   }
// }

export default SushiContainer