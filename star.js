let str = '<p>Hello, <b>world</b>!</p>';

function deleteTags(str) {
        if ((str === null) || (str === ''))
                return false;
        else
                str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
};

console.log(deleteTags(str));