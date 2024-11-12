'use client';

import katex from 'katex';

function MathExpression<Obj extends {}>(props: { style?: Obj, children: string }) {
    // TODO : implement highlighting invalid expressions
    const html = {
        __html: katex.renderToString(props.children)
    };
    return (
        <span style={props.style ?? {}}><div dangerouslySetInnerHTML={html} /></span>
    )
}

export default function App() {
    return (
        <MathExpression>\frac{1}{2}</MathExpression>
    )
}
