(function () {
    describe('spaces', function () {
        it('outputs the correct number of spaces', function () {
            expect(spaces(3)).toBe("   ");
        });
        it('handles 0', function () {
            expect(spaces(0)).toBe("");
        });
    });

    describe('justify', function () {
        it('handles evenly spaced sentences', function () {
            expect(justify("what is up", 12)).toBe("what  is  up");
        });

        //this assumes that leftover spaces should go after the first word
        it('handles non evenly spaces sentences', function () {
            expect(justify("my dog has fleas", 30)).toBe("my       dog     has     fleas");
        });
    });
})();
