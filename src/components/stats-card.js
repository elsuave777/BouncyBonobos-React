import React from 'react'

import PropTypes from 'prop-types'

import './stats-card.css'

const StatsCard = (props) => {
  return (
    <div className="stats-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="stats-card-image"
      />
    </div>
  )
}

StatsCard.defaultProps = {
  image_src: '/playground_assets/05.svg',
  image_alt: 'image',
}

StatsCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StatsCard
