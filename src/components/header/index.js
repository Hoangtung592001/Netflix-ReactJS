import React, { useState, useRef } from 'react';
import { 
    Background, 
    Logo, 
    Container, 
    ButtonLink, 
    Feature, 
    Group, 
    Link, 
    Search,
    SearchIcon, 
    SearchInput, 
    PlayButton, 
    Text, 
    FeatureCallOut,
    Profile,
    Picture,
    Dropdown
} from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({bg = true, children, ...restProps}) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    const SearchInputRef = useRef();
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => {
                        setSearchActive((searchActive) => !searchActive);
                        SearchInputRef.current.focus();
                    }
                }
            >
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                ref={SearchInputRef}
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                onBlur={() => setSearchActive(false)}
            />
        </Search>
    );
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

