import React from 'react'
import ReactViewTableBody from './ReactViewTableBody'
import { CELL_WIDTH, CLASS_NAMES } from './constants'
import './ReactViewTable.css'

class ReactViewTable extends React.Component {
  static noResultRenderer ({ width, height }) {
    return (
      <div className={CLASS_NAMES.noResult} style={{ width, height }}>No Result</div>
    )
  }

  state = {
    tableWidth: 0,
    scrollLeft: 0,
    headerHeight: 0,
  }

  componentDidMount () {
    this.onUpdateAfterRender()
  }

  componentDidUpdate () {
    this.onUpdateAfterRender()
  }

  onUpdateAfterRender = () => {
    const { headerHeight, tableWidth } = this.state
    const newState = {}
    let isUpdate = false

    if (this.headerContentRef.clientHeight !== headerHeight) {
      newState.headerHeight = this.headerContentRef.clientHeight
      isUpdate = true
    }

    if (this.tableRef.clientWidth !== tableWidth) {
      newState.tableWidth = this.tableRef.clientWidth
      isUpdate = true
    }

    if (isUpdate) {
      this.setState(newState)
    }
  }

  onScroll = event => {
    this.setState({
      scrollLeft: event.target.scrollLeft,
    })
  }

  headerCellRenderer = ({ label, style, key }) => {
    const { headerCellClassName = CLASS_NAMES.headerCell } = this.props

    return (
      <div className={headerCellClassName} style={style} key={key}>
        {label}
      </div>
    )
  }

  getHeaderColumns = () => {
    const {
      columns,
    } = this.props

    let contentWidth = 0

    const headerColumns = columns.map((column, index) => {
      const {
        headerCellRenderer = this.headerCellRenderer,
        width = CELL_WIDTH,
        label,
        ...restProps,
      } = column
      const style = {
        width,
        left: contentWidth,
      }
      contentWidth += width

      return headerCellRenderer({ style, label, key: index, ...restProps })
    })

    return {
      contentWidth,
      columns: headerColumns,
    }
  }

  render () {
    const {
      maxHeight,
      data = [],
      columns,
      noResultRenderer = ReactViewTable.noResultRenderer,
      tableClassName = CLASS_NAMES.table,
      headerClassName = CLASS_NAMES.header,
      headerContentClassName = CLASS_NAMES.headerContent,
      bodyClassName = CLASS_NAMES.body,
      rowClassName = CLASS_NAMES.row,
      cellClassName = CLASS_NAMES.cell,
    } = this.props
    const {
      scrollLeft,
      headerHeight,
      tableWidth,
    } = this.state

    const { columns: headerColumns, contentWidth } = this.getHeaderColumns()

    const headerStyle = {

    }

    const headerContentStyle = {
      width: contentWidth,
      transform: `translateX(${-scrollLeft}px)`
    }
    const bodyStyle = {
      maxHeight: maxHeight - headerHeight,
    }

    return (
      <div className={tableClassName} ref={r => this.tableRef = r}>
        <header className={headerClassName} style={headerStyle}>
          <div className={headerContentClassName} style={headerContentStyle} ref={r => this.headerContentRef = r}>
            {headerColumns}
          </div>
        </header>
        <div className={bodyClassName} onScroll={this.onScroll} style={bodyStyle}>
          {data.length ? (
            <ReactViewTableBody
              data={data}
              columns={columns}
              contentWidth={contentWidth}
              rowClassName={rowClassName}
              cellClassName={cellClassName}
            />
          ) : noResultRenderer({ width: tableWidth, height: maxHeight - headerHeight })}
        </div>
      </div>
    )
  }
}

export default ReactViewTable
