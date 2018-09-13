import React from 'react'
import { CELL_WIDTH } from './constants'

class ReactViewTableBody extends React.PureComponent {
  static bodyContentCellRenderer ({ text }) {
    return text
  }

  bodyCellRenderer = ({ row, style, key, content }) => {
    const { cellClassName } = this.props

    return (
      <div className={cellClassName} style={style} key={key}>
        {content}
      </div>
    )
  }

  getBodyColumns = () => {
    const {
      columns,
      data,
      contentWidth,
      rowClassName,
      defaultBodyCellRenderer = this.bodyCellRenderer,
      defaultBodyContentCellRenderer = ReactViewTableBody.bodyContentCellRenderer,
    } = this.props

    let totalWidth = 0

    return data.map((row, index) => {
      totalWidth = 0
      const cells = columns.map((column, columnIndex) => {
        const {
          bodyCellRenderer = defaultBodyCellRenderer,
          bodyContentCellRenderer = defaultBodyContentCellRenderer,
          width = CELL_WIDTH,
          accessor,
        } = column
        const style = {
          width,
          left: totalWidth,
        }
        totalWidth += width

        const content = bodyContentCellRenderer({ row, text: row[accessor], accessor })

        return bodyCellRenderer({ style, accessor, row, key: `${index}:${columnIndex}`, content })
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
