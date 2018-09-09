var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactViewTableBody from './ReactViewTableBody';
import { CELL_WIDTH, CLASS_NAMES } from './constants';
import './ReactViewTable.css';

var ReactViewTable = function (_React$Component) {
  _inherits(ReactViewTable, _React$Component);

  function ReactViewTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactViewTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactViewTable.__proto__ || Object.getPrototypeOf(ReactViewTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tableWidth: 0,
      scrollLeft: 0,
      headerHeight: 0
    }, _this.onUpdateAfterRender = function () {
      var _this$state = _this.state,
          headerHeight = _this$state.headerHeight,
          tableWidth = _this$state.tableWidth;

      var newState = {};
      var isUpdate = false;

      if (_this.headerContentRef.clientHeight !== headerHeight) {
        newState.headerHeight = _this.headerContentRef.clientHeight;
        isUpdate = true;
      }

      if (_this.tableRef.clientWidth !== tableWidth) {
        newState.tableWidth = _this.tableRef.clientWidth;
        isUpdate = true;
      }

      if (isUpdate) {
        _this.setState(newState);
      }
    }, _this.onScroll = function (event) {
      _this.setState({
        scrollLeft: event.target.scrollLeft
      });
    }, _this.headerCellRenderer = function (_ref2) {
      var label = _ref2.label,
          style = _ref2.style,
          key = _ref2.key;
      var _this$props$headerCel = _this.props.headerCellClassName,
          headerCellClassName = _this$props$headerCel === undefined ? CLASS_NAMES.headerCell : _this$props$headerCel;


      return React.createElement(
        'div',
        { className: headerCellClassName, style: style, key: key },
        label
      );
    }, _this.getHeaderColumns = function () {
      var columns = _this.props.columns;


      var contentWidth = 0;

      var headerColumns = columns.map(function (column, index) {
        var _column$headerCellRen = column.headerCellRenderer,
            headerCellRenderer = _column$headerCellRen === undefined ? _this.headerCellRenderer : _column$headerCellRen,
            _column$width = column.width,
            width = _column$width === undefined ? CELL_WIDTH : _column$width,
            label = column.label,
            restProps = _objectWithoutProperties(column, ['headerCellRenderer', 'width', 'label']);

        var style = {
          width: width,
          left: contentWidth
        };
        contentWidth += width;

        return headerCellRenderer(Object.assign({ style: style, label: label, key: index }, restProps));
      });

      return {
        contentWidth: contentWidth,
        columns: headerColumns
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactViewTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onUpdateAfterRender();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.onUpdateAfterRender();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          maxHeight = _props.maxHeight,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          columns = _props.columns,
          _props$noResultRender = _props.noResultRenderer,
          noResultRenderer = _props$noResultRender === undefined ? ReactViewTable.noResultRenderer : _props$noResultRender,
          _props$tableClassName = _props.tableClassName,
          tableClassName = _props$tableClassName === undefined ? CLASS_NAMES.table : _props$tableClassName,
          _props$headerClassNam = _props.headerClassName,
          headerClassName = _props$headerClassNam === undefined ? CLASS_NAMES.header : _props$headerClassNam,
          _props$headerContentC = _props.headerContentClassName,
          headerContentClassName = _props$headerContentC === undefined ? CLASS_NAMES.headerContent : _props$headerContentC,
          _props$bodyClassName = _props.bodyClassName,
          bodyClassName = _props$bodyClassName === undefined ? CLASS_NAMES.body : _props$bodyClassName,
          _props$rowClassName = _props.rowClassName,
          rowClassName = _props$rowClassName === undefined ? CLASS_NAMES.row : _props$rowClassName,
          _props$cellClassName = _props.cellClassName,
          cellClassName = _props$cellClassName === undefined ? CLASS_NAMES.cell : _props$cellClassName;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          headerHeight = _state.headerHeight,
          tableWidth = _state.tableWidth;

      var _getHeaderColumns = this.getHeaderColumns(),
          headerColumns = _getHeaderColumns.columns,
          contentWidth = _getHeaderColumns.contentWidth;

      var headerStyle = {};

      var headerContentStyle = {
        width: contentWidth,
        transform: 'translateX(' + -scrollLeft + 'px)'
      };
      var bodyStyle = {
        maxHeight: maxHeight - headerHeight
      };

      return React.createElement(
        'div',
        { className: tableClassName, ref: function ref(r) {
            return _this2.tableRef = r;
          } },
        React.createElement(
          'header',
          { className: headerClassName, style: headerStyle },
          React.createElement(
            'div',
            { className: headerContentClassName, style: headerContentStyle, ref: function ref(r) {
                return _this2.headerContentRef = r;
              } },
            headerColumns
          )
        ),
        React.createElement(
          'div',
          { className: bodyClassName, onScroll: this.onScroll, style: bodyStyle },
          data.length ? React.createElement(ReactViewTableBody, {
            data: data,
            columns: columns,
            contentWidth: contentWidth,
            rowClassName: rowClassName,
            cellClassName: cellClassName
          }) : noResultRenderer({ width: tableWidth, height: maxHeight - headerHeight })
        )
      );
    }
  }], [{
    key: 'noResultRenderer',
    value: function noResultRenderer(_ref3) {
      var width = _ref3.width,
          height = _ref3.height;

      return React.createElement(
        'div',
        { className: CLASS_NAMES.noResult, style: { width: width, height: height } },
        'No Result'
      );
    }
  }]);

  return ReactViewTable;
}(React.Component);

export default ReactViewTable;