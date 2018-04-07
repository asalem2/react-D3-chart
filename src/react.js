var Rect = React.createClass({
    getDefaultProps: function () {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        }
    },

    shouldComponentUpdate: function (nextProps) {
        return this.props.height !== nextProps.height;
    },

    render: function () {
        return(
            <rect className="bar"
                  height={this.props.height}
                  y={this.props.y}
                  width={this.props.width}
                  x={this.props.x}
            >
            </rect>
        );
    },
});