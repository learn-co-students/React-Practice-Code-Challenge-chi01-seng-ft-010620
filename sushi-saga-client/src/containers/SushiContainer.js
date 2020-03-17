import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => {
            return <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi}/>
          })
        }
        <MoreButton changeIndex={props.changeIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer