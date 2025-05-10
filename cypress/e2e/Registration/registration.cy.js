import RegistrationPage from '../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

describe('User Registration with Faker', () => {
  it('should register a user with random data', () => {
    const name = faker.name.firstName();
    const email = faker.internet.email(name);
    const password = faker.internet.password(10);
    const gender = 'Mr'; // or 'Mrs'
    const dob = {
      day: '15',
      month: 'May',
      year: '1997'
    };
    const address = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: faker.address.streetAddress(),
      state: faker.address.state(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      mobile: faker.phone.number('98########')
    };

    RegistrationPage.visit();
    RegistrationPage.fillName(name);
    RegistrationPage.fillEmail(email);
    RegistrationPage.clickSignup();

    RegistrationPage.selectGender(gender);
    RegistrationPage.fillPassword(password);
    RegistrationPage.selectDOB(dob.day, dob.month, dob.year);
    RegistrationPage.checkNewsletter();
    RegistrationPage.checkOffers();
    RegistrationPage.fillAddress(address);
    RegistrationPage.clickCreateAccount();
    RegistrationPage.assertAccountCreated();
  });
});
