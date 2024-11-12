'use client';

import katex from 'katex';

function MathExpression(props: { style?: string, children: string }) {
    // TODO : implement highlighting invalid expressions
    const html = {
        __html: katex.renderToString(props.children)
    };
    return (
        <span style={style}><div dangerouslySetInnerHTML={html} /></span>
    )
}

export default function App() {
    return (
        <MathExpression>\frac{1}{2}</MathExpression>
    )
}
