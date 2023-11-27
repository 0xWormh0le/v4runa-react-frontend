import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './SvgIcon.scss'

const SvgIcon = forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    color = 'inherit',
    as: Component = 'svg',
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24',
    size,
    width = '1em',
    ...other
  } = props

  return (
    <Component
      className={cn(
        'SvgIcon',
        {
          [`text-${color}`]: color !== 'inherit'
        },
        className
      )}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      aria-hidden={titleAccess ? 'false' : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      ref={ref}
      width={size || width}
      {...other}>
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  )
})

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'inherit']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  as: PropTypes.elementType,
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
  /**
   * Sets the custom width of the SVG
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Sets the custom height of the SVG
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Sets the equal width and height of the SVG,
   * with higher priority than width & height props
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default SvgIcon
