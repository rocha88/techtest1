define(['app/Parser'], function(CurrencyParser) {
    'use strict';

    describe('CurrencyParser', function() {
        var parser;

        beforeEach(function() {
            parser = new CurrencyParser();
        });

        xit('can\'t parse numbers', function() {
            expect(function() {
                parser.parseString(10);
            }).toThrow();
        });

        it('can correctly parse valid string formats', function() {
            // Based on table in gist
            // TODO DRY using where.js - and get better descriptions for free!
            // TODO or at least do this with an array :(
            expect(parser.parseString('4')).toEqual(4);
            expect(parser.parseString('85')).toEqual(85);
            expect(parser.parseString('197p')).toEqual(197);
            expect(parser.parseString('2p')).toEqual(2);
            expect(parser.parseString('1.87')).toEqual(187);
            expect(parser.parseString('£1.23')).toEqual(123);
            expect(parser.parseString('£2')).toEqual(200);
            expect(parser.parseString('£10')).toEqual(1000);
            expect(parser.parseString('£1.87p')).toEqual(187);
            expect(parser.parseString('£1p')).toEqual(100);
            expect(parser.parseString('£1.p')).toEqual(100);
            expect(parser.parseString('001.41p')).toEqual(141);
            expect(parser.parseString('4.235p')).toEqual(424);
            expect(parser.parseString('£1.257422457p')).toEqual(126);
        });

        it('returns 0 for invalid string formats', function() {
            // As above
            // TODO assumption is that no error is thrown, we just get zero back
            expect(parser.parseString('')).not.toBeDefined();
            expect(parser.parseString('1x')).not.toBeDefined();
            expect(parser.parseString('£1x.0p')).not.toBeDefined();
            expect(parser.parseString('£p')).not.toBeDefined();
        });
    });
});
