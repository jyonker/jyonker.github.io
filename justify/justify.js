(function () {
    $(document).ready(function () {
        var string1 = "my dog has fleas";
        $('.justification').append('<pre>Original String: ' + string1 + '</pre>',
                '<pre>Justified String: ' + justify(string1, 30) + '</pre>');
    });

    function justify(unjustifiedString, justifyLength) {
        var words = unjustifiedString.split(' '),
            originalLength = unjustifiedString.length,
            remainingSpaceToFill = justifyLength - originalLength,
            numberOfWordBreaks = words.length - 1,
            spacesBetweenWords = Math.floor(remainingSpaceToFill / numberOfWordBreaks),
            leftoverSpaces = remainingSpaceToFill % numberOfWordBreaks;

        words[0] += spaces(leftoverSpaces);

        return words.join(spaces(spacesBetweenWords + 1));
    }

    function spaces(numberOfSpaces) {
        return (new Array(numberOfSpaces + 1).join(' '));
    }

    //this is not a great pattern, but it works for the purposes of this exercise
    window.justify = justify;
    window.spaces = spaces;
})();

