import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconHeart({ size, ...props }) {
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
        d="M18.681 6.314l-.002-.002a4.55 4.55 0 0 0-6.388-.002v.001h-.001l-.29.287-.288-.286A4.508 4.508 0 0 0 8.518 5a4.508 4.508 0 0 0-3.195 1.312A4.43 4.43 0 0 0 4 9.479c0 1.196.47 2.32 1.323 3.166l6.22 6.167a.65.65 0 0 0 .915 0l6.22-6.166a4.456 4.456 0 0 0 .003-6.332zm-.916 5.425L12 17.453l-5.764-5.714a3.162 3.162 0 0 1-.944-2.26c0-.854.335-1.657.944-2.261a3.23 3.23 0 0 1 2.28-.935 3.23 3.23 0 0 1 2.28.935l.747.74a.65.65 0 0 0 .914 0l.746-.74.001-.001a3.247 3.247 0 0 1 4.558 0l.003.002a3.18 3.18 0 0 1-.001 4.52z"
      />
    </svg>
  )
}

IconHeart.propTypes = IconPropTypes
export default IconHeart
