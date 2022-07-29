const Employee = require('../libs/Employee');

describe('Employee Class', () => {
    describe('Employee properies', () => {
        it('Create a constructor that hold the parameters of name, id, email.', () => {
            const CEmployee = new Employee( 27, 'pc1996@yahoo.com','Paulo');

            expect(CEmployee.id).toEqual(27);
            expect(CEmployee.email).toEqual('pc1996@yahoo.com');
            expect(CEmployee.name).toEqual( 'Paulo');
        })
    })
})
