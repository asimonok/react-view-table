var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { CELL_WIDTH } from './constants';

var ReactViewTableBody = function (_React$PureComponent) {
  _inherits(ReactViewTableBody, _React$PureComponent);

  function ReactViewTableBody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactViewTableBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactViewTableBody.__proto__ || Object.getPrototypeOf(ReactViewTableBody)).call.apply(_ref, [this].concat(args))), _this), _this.bodyCellRenderer = function (_ref2) {
      var accessor = _ref2.accessor,
          row = _ref2.row,
          style = _ref2.style,
          key = _ref2.key;
      var cellClassName = _this.props.cellClassName;


      return React.createElement(
        'div',
        { className: cellClassName, style: style, key: key },
        row[accessor]
      );
    }, _this.getBodyColumns = function () {
      var _this$props = _this.props,
          columns = _this$props.columns,
          data = _this$props.data,
          contentWidth = _this$props.contentWidth,
          rowClassName = _this$props.rowClassName;


      var totalWidth = 0;

      return data.map(function (row, index) {
        totalWidth = 0;
        var cells = columns.map(function (column, columnIndex) {
          var _column$bodyCellRende = column.bodyCellRenderer,
              bodyCellRenderer = _column$bodyCellRende === undefined ? _this.bodyCellRenderer : _column$bodyCellRende,
              _column$width = column.width,
              width = _column$width === undefined ? CELL_WIDTH : _column$width,
              accessor = column.accessor;

          var style = {
            width: width,
            left: totalWidth
          };
          totalWidth += width;

          return bodyCellRenderer({ style: style, accessor: accessor, row: row, key: index + ':' + columnIndex });
        });

        var style = {
          width: contentWidth
        };

        return React.createElement(
          'div',
          { className: rowClassName, key: index, style: style },
          cells
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactViewTableBody, [{
    key: 'render',
    value: function render() {
      return this.getBodyColumns();
    }
  }]);

  return ReactViewTableBody;
}(React.PureComponent);

export default ReactViewTableBody;