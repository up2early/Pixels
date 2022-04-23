export const PixelsDisplay = () => {
    const pixels = ["#0000ff", "#ff0000"]

    const totalWidth = 300
    const totalHeight = 300
    const pixelSize = totalWidth / pixels.length

    var pixelsSVG = []
    for (var i = 0; i < pixels.length; i++) {
        const offset = i * pixelSize
        pixelsSVG.push(<rect width={pixelSize} height={pixelSize} fill={pixels[i]} key={i} x={offset}/>)
    }

    return(
        <svg width={totalWidth} height={totalHeight}>
            {pixelsSVG}
        </svg>
    )
}

export {}