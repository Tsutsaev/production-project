declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}
declare module '*.svg' {
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default SVG
}

declare const __IS_DEV__: boolean
