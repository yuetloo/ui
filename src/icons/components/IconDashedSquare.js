import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconDashedSquare({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
        d="M9.14 5H6.995C5.895 5 5 5.895 5 6.995V9.14a.566.566 0 0 0 1.131 0V6.995c0-.476.388-.864.864-.864H9.14A.566.566 0 0 0 9.14 5zm7.865 0H14.86a.566.566 0 1 0 0 1.131h2.145c.476 0 .864.388.864.864V9.14a.565.565 0 1 0 1.131 0V6.995C19 5.895 18.105 5 17.005 5zm1.43 9.294a.565.565 0 0 0-.566.566v2.145a.865.865 0 0 1-.864.864H14.86a.565.565 0 1 0 0 1.13h2.145c1.1 0 1.995-.894 1.995-1.994V14.86a.566.566 0 0 0-.565-.566zM9.14 17.869H6.995a.865.865 0 0 1-.864-.864V14.86a.566.566 0 1 0-1.131 0v2.145C5 18.105 5.895 19 6.995 19H9.14a.566.566 0 0 0 0-1.131z"
      />
    </svg>
  )
}

IconDashedSquare.propTypes = IconPropTypes
export default IconDashedSquare
