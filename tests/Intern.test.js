const Intern = require('../libs/Intern');

describe('Intern Class', () => {
    describe('Intern properies', () => {
        it('Create a constructor that hold the Intern parameters of name, id, email,and School.', () => {
            const CIntern = new Intern( 27, 'pc1996@yahoo.com','Paulo', 'GA Tech');

            expect(CIntern.id).toEqual(27);
            expect(CIntern.email).toEqual('pc1996@yahoo.com');
            expect(CIntern.name).toEqual( 'Paulo');
            expect(CIntern.School).toEqual( 'GA Tech');
        })
    })
})
