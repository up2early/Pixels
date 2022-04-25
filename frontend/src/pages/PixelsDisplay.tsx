import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
    pixelsDisplay: {
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
    }
})

interface props {
    pixels: string[]
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const PixelsDisplay = (props: props) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closestSquare = Math.ceil(Math.sqrt(props.pixels.length))

    const totalHeight = 0.9 * windowDimensions.height
    const totalWidth = totalHeight
    const pixelSize = totalWidth / closestSquare
    const classes = useStyles()

    var pixelsSVG = []
    var index = 0
    for (var xIndex = 0; xIndex < closestSquare; xIndex++) {
        for (var yIndex = 0; yIndex < closestSquare; yIndex++) {
            const x = xIndex * pixelSize
            const y = yIndex * pixelSize
            const key = "x: " + x.toString() + "y: " + y.toString()

            if (index < props.pixels.length) {
                pixelsSVG.push(<rect width={pixelSize} height={pixelSize} fill={props.pixels[index]} key={key} x={x} y={y} />)
            } else {
                pixelsSVG.push(<rect width={pixelSize} height={pixelSize} fill="#000000" opacity={0.5} key={key} x={x} y={y} />)
            }

            index++
        }
    }

    return (
        <div className={classes.pixelsDisplay}>
            <svg width={totalWidth} height={totalHeight}>
                {pixelsSVG}
            </svg>
        </div>
    )
}

export { }