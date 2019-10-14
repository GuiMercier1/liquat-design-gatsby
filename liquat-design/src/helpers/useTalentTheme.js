import { useLayoutEffect } from "react";

/**
 * Idea is coming from here : https://usehooks.com/useTheme/
 */
const useTalentTheme = talentDataID => {

    const themes = {};

    const guillaumeHeaderFont = "Karla";
    themes["GUILLAUME"] = {
        "html": {
            "font-family": guillaumeHeaderFont
        },
        ".brand-logo": {
            "font-family": "hammock-rough",
            "font-size": "80px",
            "bottom": "15px"
        },
        "h1, h2, h3, h4, h5": {
            "font-family": guillaumeHeaderFont
        },
        ".skill-icon i": {
            "color": "#474486"
        }
    }

    const aliceHeaderFont = "'Indie Flower', cursive";

    themes["ALICE"] = {
        "html": {
            "font-family": "'Open Sans', sans-serif"
        },
        ".brand-logo": {
            "font-family": aliceHeaderFont,
            "font-size": "55px",
            "top": "5px"
        },
        ".mobile-logo": {
            "top": "18px",
            "position": "relative"
        },
        ".menu-link": {
            "font-family": aliceHeaderFont,
            "font-size": "20px"
        },
        "h1, h2, h3, h4, h5": {
            "font-family": aliceHeaderFont
        },
        ".skill-intro": {
            "font-size": "20px"
        },
        ".skill-icon i": {
            "color": "#DC6D18"
        }
    }

    themes["LIQUAT"] = {
        ".brand-logo": themes["ALICE"][".brand-logo"],
        ".mobile-logo" : themes["ALICE"][".mobile-logo"],
        ".menu-link": themes["ALICE"][".menu-link"],
        "html": themes["ALICE"]["html"],
    };

    const theme = themes[talentDataID];

    useLayoutEffect(
        () => {
            // Iterate through each value in theme object
            for (const selector in theme) {
                // Update css variables in document's root element
                const elements = document.querySelectorAll(selector);

                const attributes = theme[selector];

                for (const key in attributes) {
                    elements.forEach(element => {
                        element.style.setProperty(key, attributes[key]);
                    });
                }
            }
        },
        [theme] // Only call again if theme object reference changes
    );

}

export default useTalentTheme;