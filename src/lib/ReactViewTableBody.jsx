import React from 'react'
import { CELL_WIDTH } from './constants'

class ReactViewTableBody extends React.PureComponent {
  bodyCellRenderer = ({ accessor, row, style, key }) => {
    const { cellClassName } = this.props

    return (
      <div className={cellClassName} style={style} key={key}>
        {row[accessor]}
      </div>
    )
  }

  getBodyColumns = () => {
    const {
      columns,
      data,
      contentWidth,
      rowClassName,
    } = this.props

    let totalWidth = 0

    return data.map((row, index) => {
      totalWidth = 0
      const cells = columns.map((column, columnIndex) => {
        const {
          bodyCellRenderer = this.bodyCellRenderer,
          width = CELL_WIDTH,
          accessor,
        } = column
        const style = {
          width,
          left: totalWidth,
        }
        totalWidth += width

        return bodyCellRenderer({ style, accessor, row, key: `${index}:${columnIndex}` })
      })

      const style = {
        width: contentWidth,
      }

      return (
        <div className={rowClassName} key={index} style={style}>
          {cells}
        </div>
      )

    })
  }

  render () {
    return this.getBodyColumns()
  }
}

export default ReactViewTableBody
