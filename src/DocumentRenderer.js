import React from 'react';

let useNumberBulleting = true;
const RenderElement = ({ element, parentType }) => {
    const renderChildren = (children) => {
        let els = (children || []).map((child, index) => (
            <RenderElement key={index} element={child} parentType={element.type} />
        ));
        return els
    };

    const renderTextElement = (element) => {
        let style = {};
        if (parentType === 'h4') {
            style.fontWeight = 'normal';
        }
        if (element.bold) {
            style.fontWeight = 'bold';
        }
        if (element.underline) {
            style.textDecoration = 'underline';
        }
        if (element.color) {
            style.color = element.color;
        }
        return <span style={style}>{element.text}</span>;
    };
    const elementType = element.type === 'p' && parentType === 'p' ? 'span' : element.type;
    switch (elementType) {
        case 'clause':
            let bulleting = useNumberBulleting ? '1' : 'a'
            useNumberBulleting = !useNumberBulleting
            return <li><ol type={bulleting}>{renderChildren(element.children, elementType)}</ol></li>;
        case 'block':
        case 'lic':
            return renderChildren(element.children, elementType);
        case 'h1':
            return <h1>{renderChildren(element.children, elementType)}</h1>;
        case 'p':
            return <p>{renderChildren(element.children, elementType)}</p>;
        case 'ul':
            return <ul>{renderChildren(element.children, elementType)}</ul>;
        case 'li':
            return <li>{renderChildren(element.children, elementType)}</li>;
        case 'h4':
            return <h4>{renderChildren(element.children, elementType)}</h4>;
        case 'mention':
            return <span style={{ 'backgroundColor': element.color }}>{renderChildren(element.children, elementType)}</span>;
        default:
            return renderTextElement(element);
    }
};

const DocumentRenderer = ({ documentStructure }) => {
    return (
        <div className='service-agreement'>
            <ol>
            {documentStructure.map((element, index) => (
                <RenderElement key={index} element={element} parentType={null} />
            ))}
            </ol>
        </div>
    );
};

export default DocumentRenderer;
