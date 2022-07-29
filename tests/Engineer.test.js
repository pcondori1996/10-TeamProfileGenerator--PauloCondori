const Engineer = require('../libs/Engineer');

describe('Engineer Class', () => {
    describe('Engineer properies', () => {
        it('Create a constructor that hold the Engineer parameters of name, id, email,and github.', () => {
            const CEngineer = new Engineer( 27, 'pc1996@yahoo.com','Paulo', 'pcon1996');

            expect(CEngineer.id).toEqual(27);
            expect(CEngineer.email).toEqual('pc1996@yahoo.com');
            expect(CEngineer.name).toEqual( 'Paulo');
            expect(CEngineer.github).toEqual( 'pcon1996');
        })
    })
})
