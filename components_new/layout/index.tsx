// @flow 
import React, { useState, useEffect } from 'react';
import { Nav } from '../../components_new/nav';
import Script from 'next/script';

type Props = {
    children: JSX.Element;

};
export const Layout = (props: Props) => {

    const [isDark, setIsDark] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const toggleDark = () => {
        if (isDark) {
            localStorage.theme = 'arlight';
        } else {
            localStorage.theme = 'ardark';
        }
        setIsDark(!isDark);
    }

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'ardark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          setIsDark(true)
        } else {
          setIsDark(false)
        }
        setLoaded(true)
    }, [isDark]);

    return (
        <>
            {loaded && 
                <div className="flex flex-col flex-wrap font-mono w-full h-screen" data-theme={isDark ? "ardark" : "arlight"}>
                    <Nav toggleDark={toggleDark} />
                    <Script strategy="beforeInteractive">
                        {`
                            if (localStorage.theme === 'ardark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                localStorage.theme = 'ardark'
                            } else {
                                localStorage.theme = 'arlight'
                            }
                        `}
                    </Script>
                    <div className="h-body grow md:overflow-y-auto overflow-y-scroll">
                    <div id="top"className="h-0 w-0"></div>
                        {props.children}
                    </div>
                </div>
            }
        </>
    );
};

