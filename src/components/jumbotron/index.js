import React from 'react';
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron';
export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
}

Jumbotron.Container = function JombotronContainer({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JombotronPane({ children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JombotronTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JombotronSubTitle({ children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JombotronImage({...restProps}) {
    return <Image {...restProps}/>
}