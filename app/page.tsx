'use client';

import katex from 'katex';

function MathExpression(props: { color?: "red" | "green", children: string }) {
    // TODO : implement highlighting invalid expressions
    const html = {
        __html: katex.renderToString(
            `\\textcolor{${props.color ?? "black"}}{${props.children}}`
        ),
    };
    return (
        <div dangerouslySetInnerHTML={html} />
    )
}

export default function App() {
    return (
        <MathExpression>{'\\frac{1}{2}'}</MathExpression>
    )
}
