import { Breadcrumb } from 'antd';
import React from 'react';

interface IProps {
    items: string[]
}

const BreadcrumbPage = (props: IProps) => {
    const renderBreadcrumb = () => {
        let xhtml = null;
        xhtml = props.items.map((item: string, index: number) => {
            return (
                <Breadcrumb.Item key={index} >{item}</Breadcrumb.Item>
            )
        })
        return xhtml;
    }
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                {
                    renderBreadcrumb()
                }
            </Breadcrumb>
        </>
    );
};
export default React.memo(BreadcrumbPage);
