import { convert } from 'html-to-text';

const HtmlToText = (covertText) => {

    const options = {
        wordwrap: 130,
    };
    const text = convert(covertText, options);

    return text
};

export default HtmlToText;