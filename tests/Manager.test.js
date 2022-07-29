const Manager = require('../libs/Manager');

describe('Manager Class', () => {
    describe('Manager properies', () => {
        it('Create a constructor that hold the Manager parameters of name, id, email,and Manager Office Number.', () => {
            const CManager = new Manager( 27, 'pc1996@yahoo.com','Paulo', 100);

            expect(CManager.id).toEqual(27);
            expect(CManager.email).toEqual('pc1996@yahoo.com');
            expect(CManager.name).toEqual( 'Paulo');
            expect(CManager.managerONum).toEqual(100);
        })
    })
})
